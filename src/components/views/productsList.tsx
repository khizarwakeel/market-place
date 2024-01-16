import { StaticImageData } from "next/image";
import Wrapper from "../shared/wrapper";
import { products } from "../utils/data";
import ProductsCards from "../shared/productCards";

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
              <ProductsCards
                img={item.image as StaticImageData}
                title={item.name}
                price={item.price}
                id={item.id}
                category={item.category}
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default ProductsList;