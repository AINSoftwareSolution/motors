// pages/api/car/route.ts
import { connectMongoDB } from "@/app/lib/connect";
import CarModel from "@/app/models/carModel";
import { NextResponse } from "next/server";

// GET: Fetch car listings
export async function GET() {
  try {
    await connectMongoDB();
    const cars = await CarModel.find();
    return NextResponse.json(cars, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: `An error occurred while fetching car data: ${error.message}`,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const carData = await request.json();
    await connectMongoDB();
    await CarModel.create(carData);
    return NextResponse.json(
      { message: "Car has been successfully listed.", status: 201 },
      { status: 201 }
    );
  } catch (error: any) {
    // Handle and return any errors that occur
    return NextResponse.json(
      { message: `An error occurred while adding the car: ${error.message}` },
      { status: 500 }
    );
  }
}
