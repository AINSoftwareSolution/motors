// pages/api/auth/login.ts
import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/connect";
import UserModel from "../../../models/userModel";
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    await connectMongoDB();
    
    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, 'daulat', {
      expiresIn: '1h', // Token expiration time
    });

    return NextResponse.json(
      { token },
      { status: 200 }
    );
  } catch (error:any) {
    return NextResponse.json(
      { message: `An error occurred during login: ${error.message}` },
      { status: 500 }
    );
  }
}
