import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../lib/connect'; // Database connection
import UserModel from '../../../models/userModel'; // User model

// POST: Register a new user
export async function POST(request: Request) {
  const { email, password } = await request.json();

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
      password, // The password will be hashed using the pre-save middleware
    });

    await newUser.save();
    return NextResponse.json(
      { message: 'User registered successfully', user: { email } },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: `An error occurred during registration: ${error.message}` },
      { status: 500 }
    );
  }
}

// GET: Fetch all users
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

// DELETE: Remove a user by ID
export async function DELETE(request: Request) {
  const { _id } = await request.json(); // Expect the id to be passed in the body



  if (!_id) {
    return NextResponse.json(
      { message: 'User ID is required' },
      { status: 400 }
    );
  }

  try {
    await connectMongoDB();
    
    const user = await UserModel.findById(_id);
    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    await UserModel.findByIdAndDelete(_id);

    return NextResponse.json(
      { message: 'User deleted successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: `An error occurred during deletion: ${error.message}` },
      { status: 500 }
    );
  }
}
