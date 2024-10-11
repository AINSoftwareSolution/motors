import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../lib/connect'; // Database connection
import UserModel from '../../../models/userModel'; // User model

export async function POST(request: Request) {
  const {  email, password } = await request.json();

  try {
    await connectMongoDB();
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists with this email' },
        { status: 400 }
      );
    }    
    const newUser = new UserModel({
      email,
      password, 
    });

    await newUser.save();
    return NextResponse.json(
      { message: 'User registered successfully', user: {  email } },
      { status: 201 }
    );
  } catch (error:any) {
    return NextResponse.json(
      { message: `An error occurred during registration: ${error.message}` },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    await connectMongoDB();
    const users = await UserModel.find();
    return NextResponse.json(users, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: `An error occurred while fetching user data: ${error.message}`,
      },
      { status: 500 }
    );
  }
}  

