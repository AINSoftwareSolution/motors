export interface CarFormData {
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
    features: string[]; // Assuming features is an array of strings
    sellerContact: string;
    images: string[]; // Assuming images is an array of strings (URLs)
    description: string;
    transmission: string;
    fuelType: string;
    lastUpdated: string; // Consider using Date if needed
  }