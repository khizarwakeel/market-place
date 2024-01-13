import ProductCards from "../shared/productCards";
import Wrapper from "../shared/wrapper";
import ProductImg1 from "/public/assets/feature.webp";
import ProductImg2 from "/public/assets/feature2.png";
import ProductImg3 from "/public/assets/feature3.png";
import ProductImg4 from "/public/assets/feature4.png";

const ProductsList = () => {
  return (
    <section className="pt-20">
      <Wrapper>
        <div className="text-center">
          <h3 className="text-[#0062f5]">PRODUCTS</h3>
          <h1 className="text-4xl font-bold py-4 pb-5">Check What We Have</h1>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <ProductCards
            img={ProductImg1}
            title="Imperial Alpaca Hoodie"
            price={525}
          />
          <ProductCards
            img={ProductImg2}
            title="Brushed Raglan Sweatshirt"
            price={195}
          />
          <ProductCards img={ProductImg3} title="Brushed Bomber" price={225} />
          <ProductCards img={ProductImg4} title="Muscle Tank" price={75.0} />
        </div>
      </Wrapper>
    </section>
  );
};

export default ProductsList;