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
  "Maruti",
  "Tata",
  "Nissan Micra",
  "Mahindra",
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

