import {
  Audi,
  BMW,
  Hyundai,
  LandRover,
  Mercedes,
  Skoda,
  Toyota,
  Nissan,
  Mahindra,
  Kia,
  Honda,
  Tata,
  Renault,
  MG,
  Suzuki,
  CellImg,
  BuyImg,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
} from "./Images";
// Services
import { FaCar } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { AiFillInsurance } from "react-icons/ai";
import { FaRoad } from "react-icons/fa";

export const CarBrands = [
  {
    src: Audi,
    alt: "Audi",
    name: "Audi",
    p: "39 vehicle available",
    link: "/audi",
  },
  {
    src: BMW,
    alt: "BMW",
    name: "BMW",
    p: "28 vehicle  available",
    link: "/bmw",
  },
  {
    src: Hyundai,
    alt: "Hyundai",
    name: "Hyundai",
    p: "30 vehicle available",
    link: "/hyundai",
  },
  {
    src: LandRover,
    alt: "LandRover",
    name: "LandRover",
    p: "25 vehicle available",
    link: "/landrover",
  },
  {
    src: Mercedes,
    alt: "Mercedes",
    name: "Mercedes",
    p: "20 vehicle available",
    link: "/mercedes",
  },
  {
    src: Skoda,
    alt: "Skoda",
    name: "Skoda",
    p: "20 vehicle available",
    link: "/skoda",
  },
  {
    src: Toyota,
    alt: "Toyota",
    name: "Toyota",
    p: "20 vehicle available",
    link: "/toyota",
  },
  {
    src: Nissan,
    alt: "Nissan",
    name: "Nissan",
    p: "20 vehicle available",
    link: "/nissan",
  },
  {
    src: Mahindra,
    alt: "Mahindra",
    name: "Mahindra",
    p: "20 vehicle available",
    link: "/mahindra",
  },
  {
    src: Honda,
    alt: "Honda",
    name: "Honda",
    p: "20 vehicle available",
    link: "/honda",
  },
  {
    src: Tata,
    alt: "Tata",
    name: "Tata",
    p: "20 vehicle available",
    link: "/tata",
  },
  {
    src: Renault,
    alt: "Renault",
    name: "Renault",
    p: "20 vehicle available",
    link: "/renault",
  },
  { src: MG, alt: "MG", name: "MG", p: "20 vehicle available", link: "/mg" },
  {
    src: Suzuki,
    alt: "Suzuki",
    name: "Suzuki",
    p: "20 vehicle available",
    link: "/suzuki",
  },
  {
    src: Kia,
    alt: "Kia",
    name: "Kia",
    p: "20 vehicle available",
    link: "/kia",
  },
];

 // ad related section
 export const Ads = [
    {
      src: Suzuki,
      title: "Suzuki",
      link: "/suzuki",
    },
    {
      src: Kia,
      title: "Kia",
      link: "/kia",
    },
    {
      src: Honda,
      title: "Honda",
      link: "/honda",
    },
 ];

// Buy And Cell
export const infoContent = [
  {
    id: 1,
    title: "Are You Looking",
    strongText: "TO BUY A CAR?",
    buttonText: "Search Your Car",
    buttonLink: "#",
    backgroundImage: `url(${BuyImg.src})`,
  },
  {
    id: 2,
    title: "Do You Want To",
    strongText: "SELL YOUR CAR?",
    buttonText: "  Let Us Know    ",
    buttonLink: "#",
    backgroundImage: `url(${CellImg.src})`,
  },
];

// Services
export const services = [
  {
    id: 1,
    icon: FaCar,
    title: "USED CAR SELL/BUY",
    description:
      "If you have a car that you have invested enough with regular servicing which you love but is starting to look a bit tired and old, refurbishment definitely should be considered.",
  },
  {
    id: 2,
    icon: TbMoneybag,
    title: "FINANCE",
    description:
      "We assist you with financial difficulties that you might face while purchasing a car of your dreams. We have different options that will help you buy your dream car.",
  },
  {
    id: 3,
    icon: AiFillInsurance,
    title: "INSURANCE",
    description:
      "Your car needs the best care. After all, it is a possession that is close to your heart. Thus it only makes sense to ensure that your car is secure and safe in the best possible way.",
  },
  {
    id: 4,
    icon: FaRoad,
    title: "RTO WORK",
    description:
      "Our pointers check is designed to give a comprehensive and transparent assessment of your vehicle, identifying any safety issues your car may have.",
  },
];
// Button

export interface ButtonData {
  title: string;
  link: string;
}

// inventry
export const inventoryItems = [
  {
    id: 1,
    title: "Car Name 2016",
    price: "$69,900",
    location: "Atlanta, GA",
    imgSrc: Image1,
  },
  {
    id: 2,
    title: "Car Name 2016",
    price: "$69,900",
    location: "Atlanta, GA",
    imgSrc: Image2,
  },
  {
    id: 3,
    title: "Car Name 2016",
    price: "$69,900",
    location: "Atlanta, GA",
    imgSrc: Image3,
  },
  {
    id: 4,
    title: "Car Name 2016",
    price: "$69,900",
    location: "Atlanta, GA",
    imgSrc: Image4,
  },
  {
    id: 5,
    title: "Car Name 2016",
    price: "$69,900",
    location: "Atlanta, GA",
    imgSrc: Image5,
  },
  {
    id: 6,
    title: "Car Name 2016",
    price: "$69,900",
    location: "Atlanta, GA",
    imgSrc: Image6,
  },
  {
    id: 7,
    title: "Car Name 2016",
    price: "$69,900",
    location: "Atlanta, GA",
    imgSrc: Image7,
  },
  {
    id: 8,
    title: "Car Name 2016",
    price: "$69,900",
    location: "Atlanta, GA",
    imgSrc: Image8,
  },
];

export const images = [
  { src: Image1, alt: "" },
  { src: Image2, alt: "" },
  { src: Image3, alt: "" },
  { src: Image4, alt: "" },
  { src: Image5, alt: "" },
];

// features
export const features = [
  { id: 1, text: "Price", price: "$9000", time: "07:30PM", location: "Pune" },
];

/// carfeatures

export const carFeatures = [
  { text: "ABS" },
  { text: "AM/FM Radio" },
  { text: "Air Bags" },
  { text: "Air Conditioning" },
  { text: "Alloy Rims" },
  { text: "CD Player" },
  { text: "Cassette Player" },
  { text: "Cruise Control" },
  { text: "DVD Player" },
  { text: "Immobilizer Key" },
  { text: "Keyless Entry" },
  { text: "Power Locks" },
  { text: "Power Mirrors" },
  { text: "Power Steering" },
  { text: "Power Windows" },
];

// About this car
export const aboutcar = [
  { text: "Registered City", location: "New York" },
  { text: "Color", location: "Pearl White" },
  { text: "Assembly", location: "Imported" },
  { text: "Engine Capacity", location: "1800 cc" },
  { text: "Body Type", location: "Mini Van" },
  { text: "Last Updated", location: "Aug 24, 2017" },
  { text: "Ad Ref #", location: "2043936" },
  { text: "Model", location: "2017" },
  { text: "Millage", location: "165,000 km" },
  { text: "Fuel", location: "Petrol" },
  { text: "Transmission", location: "Automatic" },
];

// Related ads

export const relatedAds = [
  {
    title: "Sue gate F 1.0 for Sale",
    year: 2014,
    mileage: "38,000 km",
    location: "New York",
    price: "$456.00",
    fuelType: "Petrol",
    engine: "1300 cc",
    transmission: "Automatic",
    lastUpdated: "1 day ago",
    imageSrc: "/images/cars/04.jpg", // Correct path for Next.js static images
    detailsUrl: "/detail.html",
  },
  {
    title: "Sue gate F 1.0 for Sale",
    year: 2014,
    mileage: "38,000 km",
    location: "New York",
    price: "$456.00",
    fuelType: "Petrol",
    engine: "1300 cc",
    transmission: "Automatic",
    lastUpdated: "1 day ago",
    imageSrc: "/images/cars/05.jpg",
    detailsUrl: "/detail.html",
  },
  {
    title: "Sue gate F 1.0 for Sale",
    year: 2014,
    mileage: "38,000 km",
    location: "New York",
    price: "$456.00",
    fuelType: "Petrol",
    engine: "1300 cc",
    transmission: "Automatic",
    lastUpdated: "1 day ago",
    imageSrc: "/images/cars/06.jpg",
    detailsUrl: "/detail.html",
  },
];

// stay safe
export const staySafe = [
  "Avoid deals that are too good to be true.",
  "Deal with people in your area by meeting face to face to see the item.",
  "Never provide your personal or banking information.",
  "See our Safety tips regarding vehicle buying and selling.",
  "How to spot scam ads?",
  "How to protect yourself?",
];


export const carMakes = [
  "Duster", 
  'Toyota',
  'Honda',
  'Ford',
  'Chevrolet',
  'Nissan',
  'BMW',
  'Mercedes-Benz',
  'Volkswagen',
  'Hyundai',
  'Kia',
  'Subaru',
  'Mazda',
  'Dodge',
  'Jeep',
  'Chrysler',
  'GMC',
  'Porsche',
  'Tesla',
  'Audi',
  'Lexus',
  'Land Rover',
  'Jaguar',
  'Volvo',
  'Mitsubishi',
  'Acura',
  'Infiniti',
  'Buick',
  'Lincoln',
  'Ram',
  'Fiat',
];

