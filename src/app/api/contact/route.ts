import { connectMongoDB } from "../../lib/connect";
import ContactModal from "../../models/contactModel";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    await connectMongoDB();
    await ContactModal.create(res);
    return NextResponse.json(
      { message: `Thank You for contacting!`, status: 201 },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `An error occurred while registering the user. ${error} ` },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    await connectMongoDB();
    const contact = await ContactModal.find();
    return NextResponse.json(contact, { status: 200 });
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
    
    const user = await ContactModal.findById(_id);
    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    await ContactModal.findByIdAndDelete(_id);

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