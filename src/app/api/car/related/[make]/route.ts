// pages/api/cars/related/[make].ts
import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/connect"; // Database connection
import CarModel from "../../../../models/carModel"; // Car model schema

export async function GET(
  request: Request,
  { params }: { params: { make: string } }
) {
  const { make } = params;

  try {
    await connectMongoDB();

    // Find all cars with the same make, excluding the current car (optional)
    const relatedCars = await CarModel.find({ make });

    if (!relatedCars || relatedCars.length === 0) {
      return NextResponse.json(
        { message: "No related cars found for this make." },
        { status: 404 }
      );
    }

    return NextResponse.json(relatedCars, { status: 200 });
  } catch (error:any) {
    return NextResponse.json(
      {
        message: `An error occurred while fetching related cars: ${error.message}`,
      },
      { status: 500 }
    );
  }
}
