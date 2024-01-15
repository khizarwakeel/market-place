import { StaticImageData } from "next/image";
import ProductImg1 from "/public/assets/girl1.png";
import ProductImg2 from "/public/assets/girl2.png";
import ProductImg3 from "/public/assets/girl3.webp";
import ProductImg4 from "/public/assets/girl4.png";
import ProductImg5 from "/public/assets/girl5.png";
import ProductImg6 from "/public/assets/kids1.jpg";
import ProductImg7 from "/public/assets/kids2.webp";
import ProductImg8 from "/public/assets/boy1.png";
import ProductImg9 from "/public/assets/boy2.png";

// Product Data

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string | StaticImageData;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Brushed Raglan Sweatshirt",
    category: "Female",
    price: 195,
    image: ProductImg1,
  },
  {
    id: 2,
    name: "Cameryn Sash Tie Dress",
    category: "Female",
    price: 320,
    image: ProductImg2,
  },
  {
    id: 3,
    name: "Imperial Alpaca Hoodie",
    category: "Female",
    price: 545,
    image: ProductImg3,
  },
  {
    id: 4,
    name: "Brushed Bomber",
    category: "Female",
    price: 255,
    image: ProductImg4,
  },
  {
    id: 5,
    name: "Muscle Tank",
    category: "Female",
    price: 75,
    image: ProductImg5,
  },
  {
    id: 6,
    name: "Shirts",
    category: "Kids",
    price: 545,
    image: ProductImg6,
  },
  {
    id: 7,
    name: "Brazzer",
    category: "Kids",
    price: 720,
    image: ProductImg7,
  },
  {
    id: 8,
    name: "Flex Push Button Bomber",
    category: "Male",
    price: 225,
    image: ProductImg8,
  },
  {
    id: 9,
    name: "Raglan Sweatshirt",
    category: "Male",
    price: 195,
    image: ProductImg9,
  },
];