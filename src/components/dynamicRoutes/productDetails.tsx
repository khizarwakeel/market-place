import { NextPage } from "next";

interface ProductDetailsProp {
  uniqueVal: number;
}

const ProductDetails: NextPage<ProductDetailsProp> = ({ uniqueVal }) => {
  return (
    <div>
      <h1>{uniqueVal}</h1>
    </div>
  );
};

export default ProductDetails;