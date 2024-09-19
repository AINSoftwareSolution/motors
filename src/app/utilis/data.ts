import { Audi, BMW, Hyundai, LandRover,Mercedes,Skoda, Toyota, Nissan, Mahindra,Kia, Honda, Tata, Renault, MG, Suzuki} from "./Images";
// import { Image1,Image2, Image3, Image4, Image5, Image6, Image7, Image8 } from "./Images";
import {AboutImg ,CellImg, BuyImg}  from "./Images";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCar, faDollarSign, faShieldAlt, faTools } from '@fortawesome/free-solid-svg-icons';


export const CarBrands = [
  { src: Audi, alt: "Audi", name: "Audi", p: "39 vehicle available", link: "/audi" },
  { src: BMW, alt: "BMW", name: "BMW", p: "28 vehicle  available", link: "/bmw"  },
  { src: Hyundai, alt: "Hyundai", name:  "Hyundai", p: "30 vehicle available", link: "/hyundai" },
  { src: LandRover, alt: "LandRover",  name: "LandRover", p: "25 vehicle available", link: "/landrover"},
  { src: Mercedes, alt: "Mercedes",  name: "Mercedes", p: "20 vehicle available" , link: "/mercedes"},
  { src: Skoda, alt: "Skoda",  name: "Skoda", p: "20 vehicle available" , link: "/skoda"},
  { src: Toyota, alt: "Toyota",  name: "Toyota", p: "20 vehicle available" , link: "/toyota"},
  { src: Nissan, alt: "Nissan",  name: "Nissan", p: "20 vehicle available" , link: "/nissan"},
  { src: Mahindra, alt: "Mahindra",  name: "Mahindra", p: "20 vehicle available" , link: "/mahindra"},
  { src: Honda, alt: "Honda",  name: "Honda", p: "20 vehicle available" , link: "/honda"},
  { src: Tata, alt: "Tata",  name: "Tata", p: "20 vehicle available" , link: "/tata"},
  { src: Renault, alt: "Renault",  name: "Renault", p: "20 vehicle available" , link: "/renault"},
  { src: MG, alt: "MG",  name: "MG", p: "20 vehicle available" , link: "/mg"},
  { src: Suzuki, alt: "Suzuki",  name: "Suzuki", p: "20 vehicle available" , link: "/suzuki"},
  { src: Kia, alt: "Kia",  name: "Kia", p: "20 vehicle available" , link: "/kia"},

];


  // Add more brands here
// export const InventoryImage = [
//   { src: Image1, alt: "Image1" },
//   { src: Image2, alt: "Image2" },
//   { src: Image3, alt: "Image3" },
//   { src: Image4, alt: "Image4" },
//   {  src: Image5, alt: "Image5" },
//   { src: Image6, alt: "Image6" },
//   { src: Image7, alt: "Image7" },
//   { src: Image8, alt: "Image8" },


// ];


export const aboutData = [
  {
    header: "Welcome to Daulat Cars!",
    src: AboutImg,
    description: [
      "WE ARE THE ENTHUSIASTS EMPOWERING EVERYONE TO ACHIEVE THEIR MOTORING DREAMS.",
      "Established in the year 2000 as a benchmark model for pre-owned premium & luxury cars. This privately held dealership group has come a long way since it was started by Mr. Naushad Khatari and Yusuf Tanwar in Pune, Maharashtra, India.",
      "We at Daulat Cars want to provide you an experience that is beyond your expectations in a friendly, professional, and efficient manner, creating transparency and trust with the products we sell. We also provide valuable suggestions in areas like your car, loans, insurance, RTO Works & car models.",
    ],
  },
];

// Buy And Cell
export const infoContent = [
  {
    id: 1,
    title: "Are You Looking",
    strongText: "TO BUY A CAR?",
    buttonText: "search your car",
    buttonLink: "#",
    backgroundImage: `url(${BuyImg.src})`, 
    backgroundColor: "bg-[]",
  },
  {
    id: 2,
    title: "Do You Want To",
    strongText: "SELL YOUR CAR?",
    buttonText: "   let us know    ",
    buttonLink: "#",
    backgroundImage: `url(${CellImg.src})`, 
    backgroundColor: "bg-[]",
  },
];

// Services
export const services = [
  {
    id: 1,
    // icon: faCar,
    title: 'USED CAR SELL/BUY',
    description:
      'If you have a car that you have invested enough with regular servicing which you love but is starting to look a bit tired and old, refurbishment definitely should be considered.',
  },
  {
    id: 2,
    // icon: faDollarSign,
    title: 'FINANCE',
    description:
      'We assist you with financial difficulties that you might face while purchasing a car of your dreams. We have different options that will help you buy your dream car.',
  },
  {
    id: 3,
    // icon: faShieldAlt,
    title: 'INSURANCE',
    description:
      'Your car needs the best care. After all, it is a possession that is close to your heart. Thus it only makes sense to ensure that your car is secure and safe in the best possible way.',
  },
  {
    id: 4,
    // icon: faTools,
    title: 'RTO WORK',
    description:
      'Our pointers check is designed to give a comprehensive and transparent assessment of your vehicle, identifying any safety issues your car may have.',
  },
];
