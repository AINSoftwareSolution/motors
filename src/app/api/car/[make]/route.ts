import { connectMongoDB } from "../../../lib/connect";
import CarModel from "../../../models/carModel";
import { NextResponse } from "next/server";

// GET: Fetch car listings by make
export async function GET(
  request: Request,
  { params }: { params: { make: string } }
) {
  try {
    await connectMongoDB();

    const { make } = params;

    // Fetch cars by make (case-insensitive)
    const cars = await CarModel.find({ make: new RegExp(make, "i") });

    if (!cars || cars.length === 0) {
      return NextResponse.json(
        { message: `No cars found for make: ${make}` },
        { status: 404 }
      );
    }

    return NextResponse.json(cars, { status: 200 });
  } catch (error:any) {
    return NextResponse.json(
      {
        message: `An error occurred while fetching car data: ${error.message}`,
      },
      { status: 500 }
    );
  }
}
