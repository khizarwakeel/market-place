import { NextPage } from "next";

interface ProductDetailsProp {
  uniqueVal: number;
}

const ProductDetails: NextPage<ProductDetailsProp> = ({ uniqueVal }) => {
  return (
    <div>
      <h1>{uniqueVal}</h1>
      This is Product Page Detail
    </div>
  );
};

export default ProductDetails;