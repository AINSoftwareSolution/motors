import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { randomBytes } from "crypto";
import { NextResponse } from "next/server";

// S3 client configuration
const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_Region,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AccessKeyId || "",
    secretAccessKey: process.env.NEXT_PUBLIC_SecretAccessKey || "",
  },
});

async function getFileFromStream(request: Request): Promise<Buffer | null> {
  const reader = request.body?.getReader();
  if (!reader) return null;

  const chunks: Uint8Array[] = [];
  let done = false;

  while (!done) {
    const { done: streamDone, value } = await reader.read();
    if (value) {
      chunks.push(value);
    }
    done = streamDone;
  }

  return Buffer.concat(chunks);
}
// Define the `POST` function
export async function POST(request: Request) {
  try {
    // Parse the form data from the request

    const fileBuffer = await getFileFromStream(request);
    console.log("Req", fileBuffer);
    if (!fileBuffer) {
      return NextResponse.json(
        { message: "No file uploaded" },
        { status: 400 }
      );
    }
    // Generate a unique filename
    const fileName = `${randomBytes(16).toString("hex")}.jpg`;

    const uploadParams = {
      Bucket: process.env.NEXT_PUBLIC_Bucket,
      Key: fileName,
      Body: fileBuffer,
      ContentType: "image/jpeg",
    };

    // Upload to S3
    await s3Client.send(new PutObjectCommand(uploadParams));

    const fileUrl = `https://daulatcarsbucket.s3.eu-north-1.amazonaws.com/${fileName}`;

    return NextResponse.json({ url: fileUrl }, { status: 200 });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { message: "Error uploading file" },
      { status: 500 }
    );
  }
}
