// pages/api/cars/[id].ts
import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/connect"; // Ensure this is your DB connection method
import CarModal from "../../../models/carModel";

export async function GET(request: Request, { params }: { params: { carId: string } }) {
  const { carId } = params;

  try {
    await connectMongoDB();
    const car = await CarModal.findOne({ carId: carId });

    if (!car) {
      return NextResponse.json(
        { message: "Car not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(car, { status: 200 });
  } catch (error:any) {
    return NextResponse.json(
      { message: `An error occurred while fetching car data: ${error.message}` },
      { status: 500 }
    );
  }
}
