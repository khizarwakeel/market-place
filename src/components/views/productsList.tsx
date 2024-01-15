import Image from "next/image";
import Wrapper from "../shared/wrapper";
import { products } from "../utils/data";

const ProductsList = () => {
  return (
    <section className="pt-20">
      <Wrapper>
        <div className="text-center">
          <h3 className="text-[#0062f5]">PRODUCTS</h3>
          <h1 className="text-4xl font-bold py-4 pb-5">Check What We Have</h1>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {products.slice(0, 4).map((item, index) => (
            <div key={index}>
              <div className="py-5 hover:scale-105 duration-300">
                <Image
                  src={item.image}
                  alt="Products"
                  className="object-cover flex-shrink-0"
                />
                <h3 className="py-2 font-bold">{item.name}</h3>
                <p className="text-gray-500">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default ProductsList;