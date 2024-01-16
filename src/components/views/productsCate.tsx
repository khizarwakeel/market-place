import { NextPage } from "next";
import { products } from "../utils/data";
import ProductsCards from "../shared/productCards";
import { StaticImageData } from "next/image";
import Wrapper from "../shared/wrapper";

interface ProductsCateProps {
  category: string;
}

const ProductsCate: NextPage<ProductsCateProps> = ({ category }) => {
  let filteredCategory = products;

  if (category !== "All-Products") {
    filteredCategory = products.filter((item) => item.category === category);
  }

  let categoryDisplay = category;

  if (category === "All-Products") {
    categoryDisplay = category.split("-").join(" ");
  }

  return (
    <section>
      <Wrapper>
        <div className="text-center text-4xl font-bold my-10">
          <h1>{category === "All-Products" ? categoryDisplay : category}</h1>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {filteredCategory.map((item, index) => (
            <div key={index}>
              <ProductsCards
                img={item.image as StaticImageData}
                title={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default ProductsCate;