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
    // categoryDisplay = category.replace(/-/g, ' ');
  }

  return (
    <section>
      <Wrapper>
        <div className="text-center md:text-4xl text-2xl font-bold md:my-10 my-6">
          <h1>{category === "All-Products" ? categoryDisplay : category}</h1>
        </div>
        {filteredCategory.length > 0 ? (
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5">
            {filteredCategory.map((item, index) => (
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
        ) : (
          <div className="text-lg text-center my-10">
            <p>Sorry! Products not Available</p>
          </div>
        )}
      </Wrapper>
    </section>
  );
};

export default ProductsCate;