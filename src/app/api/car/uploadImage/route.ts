import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'; // AWS SDK v3
import multer from 'multer';
import multerS3 from 'multer-s3';
import { NextResponse } from 'next/server';
import path from 'path';

// Configure the AWS S3 client using S3Client from AWS SDK v3
const s3 = new S3Client({
    region: 'eu-north-1',
    credentials: {
        accessKeyId: 'AKIAW3MD7AD2EAJWHNZU',
        secretAccessKey: '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',
    }
});

// Function to check the image type
function checkImageType(file:any, cb:any) {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Error: Images Only!'));
    }
}


// Multer configuration
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'daulatcarsbucket', // Replace with your S3 bucket name
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, 'img/' + path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname));
        },
    }),
    limits: { fileSize: 2000000 }, // 2MB limit
    fileFilter: function (req, file, cb) {
        checkImageType(file, cb); // Make sure to define this function to check the file type
    },
}).single('coverImg');

// Custom middleware to handle uploads
async function handleUpload(request: Request) {
    return new Promise((resolve, reject) => {
        // Create a mock req and res object
        const req = request as any; // Cast to any to satisfy TypeScript
        console.log(req)
        const res = {
            status: (statusCode: number) => ({
                json: (data: any) => resolve(NextResponse.json(data, { status: statusCode })),
            }),
        };

        upload(req, res as any, (err: any) => {
            if (err) {
                return reject(NextResponse.json({ message: err.message }, { status: 400 }));
            }
            // File upload successful
            return resolve(NextResponse.json({ message: 'File uploaded successfully', file: req.file }, { status: 200 }));
        });
    });
}

// Next.js API route handler
export async function POST(request: Request) {
    return handleUpload(request);
}



