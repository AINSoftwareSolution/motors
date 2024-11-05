export interface CarFormData {
    _id?: string | null | undefined;
    make: string;
    model: string;
    year: string;
    price: string;
    mileage: string;
    city: string;
    color: string;
    assembly: string;
    engineCapacity: string;
    bodyType: string;
    adsRef: string;
    features: string[]; 
    sellerContact: string;
    images: string[]; 
    description: string;
    transmission: string;
    fuelType: string;
    lastUpdated: string; 
  }

  // Define a type for your contact data to ensure TypeScript recognizes the fields
export interface ContactTypes {
  _id?: string;
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  message:string;
}