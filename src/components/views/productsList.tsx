import ProductCards from "../shared/productCards";
import Wrapper from "../shared/wrapper";
import ProductImg from "/public/assets/feature.webp";

const ProductsList = () => {
  return (
    <section>
      <Wrapper>
        <div className="grid grid-cols-4 gap-5">
          <ProductCards img={ProductImg} title="Sweeter" price={122} />
          <ProductCards img={ProductImg} title="Sweeter" price={122} />
          <ProductCards img={ProductImg} title="Sweeter" price={122} />
          <ProductCards img={ProductImg} title="Sweeter" price={122} />
        </div>
      </Wrapper>
    </section>
  );
};

export default ProductsList;