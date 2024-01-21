"use client";
import { NextPage } from "next";
import { products } from "../utils/data";
import Image from "next/image";
import Wrapper from "../shared/wrapper";
import { useState } from "react";
import { Button } from "../ui/button";

interface ProductDetailsProp {
  uniqueVal: number;
}

const ProductDetails: NextPage<ProductDetailsProp> = ({ uniqueVal }) => {
  const sizes = ["XL", "S", "M", "L", "XL"];

  const productDetail = products.filter(
    (item) => item.id === Number(uniqueVal)
  );
  const [{ image, name, price, category }] = productDetail;

  let [count, setCount] = useState(0);

  return (
    <section className="mt-10 mb-28">
      <Wrapper>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-2">
            <Image
              src={image}
              alt={name}
              className="h-32 w-32 mx-auto border border-gray-300 p-1"
            />
          </div>
          <div className="col-span-5">
            <Image src={image} width={800} height={800} alt={name} />
          </div>
          <div className="col-span-5 max-w-80">
            <div className="text-3xl font-bold">
              <h1 className="leading-snug">{name}</h1>
              <h4 className="py-6 text-lg text-gray-500">{category}</h4>
            </div>
            <div>
              <h2 className="pb-5 font-bold">SELECT SIZE</h2>
              <ul className="flex justify-between font-bold text-gray-500">
                {sizes.map((item, index) => (
                  <li
                    key={index}
                    className="hover:shadow-2xl cursor-pointer hover:shadow-gray-500 w-12 h-12 rounded-full flex justify-center items-center"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-8 mt-6 items-center">
              <p className="text-xl font-bold">Quantity:</p>

              <button
                onClick={() => (count > 0 ? setCount(--count) : setCount(0))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>

              <div>{count}</div>
              <button onClick={() => setCount(++count)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex gap-5 items-center my-6">
              <Button className="py-5 px-5 rounded-none border-2 border-t-gray-500 border-l-gray-500 border-b-gray-800 border-r-gray-800 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </Button>
              <p className="font-bold text-3xl">${price}</p>
            </div>
            <div>
              <p>
                Live the spirit of the brand by wearing the most representative
                item. This puffer jacket of recycled nylon incorporates the
                historic Armani Exchange logo - a dip into the past for iconic
                style.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="mt-14">
            <h4 className="border-b-2 pb-10 text-gray-600 text-3xl font-bold border-gray-300">
              Product Information
            </h4>
          </div>
          <div className="grid grid-cols-4 mt-10 text-justify gap-y-6">
            <div className="col-span-1 text-lg text-gray-600 font-bold">
              <h3>PRODUCT DETAILS</h3>
            </div>
            <div className="col-span-3 text-lg text-gray-500">
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-span-1 text-lg text-gray-600 font-bold">
              <h3>PRODUCT CARE</h3>
            </div>
            <div className="col-span-3 text-lg text-gray-500 ml-5">
              <ul className="list-disc">
                <li>Hand wash using cold water.</li>
                <li>Do not using bleach.</li>
                <li>Hang it to dry.</li>
                <li>Iron on low temperature.</li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ProductDetails;