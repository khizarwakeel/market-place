import { StaticImageData } from "next/image";
import ProductImg1 from "/public/assets/girl1.png";
import ProductImg2 from "/public/assets/girl2.png";
import ProductImg3 from "/public/assets/boy1.png";
import ProductImg4 from "/public/assets/boy2.png";
import ProductImg5 from "/public/assets/kids1.jpg";
import ProductImg6 from "/public/assets/kids2.webp";

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
    price: 545,
    image: ProductImg2,
  },
  {
    id: 3,
    name: "Shirts",
    category: "Kids",
    price: 545,
    image: ProductImg5,
  },
  {
    id: 4,
    name: "Kids Dress",
    category: "Kids",
    price: 720,
    image: ProductImg6,
  },
  {
    id: 5,
    name: "Flex Push Button Bomber",
    category: "Male",
    price: 225,
    image: ProductImg3,
  },
  {
    id: 6,
    name: "Raglan Sweatshirt",
    category: "Male",
    price: 195,
    image: ProductImg4,
  },
];