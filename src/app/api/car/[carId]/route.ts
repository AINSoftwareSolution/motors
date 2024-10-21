import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/connect"; 
import CarModel from "../../../models/carModel"; 

// GET: Fetch a single car by ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await connectMongoDB();
    const car = await CarModel.findById(id);

    if (!car) {
      return NextResponse.json({ message: "Car not found." }, { status: 404 });
    }

    return NextResponse.json(car, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: `An error occurred while fetching car data: ${error.message}` },
      { status: 500 }
    );
  }
}

// DELETE: Delete a car by ID
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await connectMongoDB();
    const deletedCar = await CarModel.findByIdAndDelete(id);

    if (!deletedCar) {
      return NextResponse.json({ message: "Car not found." }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Car deleted successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: `An error occurred while deleting the car: ${error.message}` },
      { status: 500 }
    );
  }
}
