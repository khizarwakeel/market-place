import ProductDetails from "@/components/dynamicRoutes/productDetails";
import { NextPage } from "next";

interface ProductDetailsParams {
  id: number;
}

const Page: NextPage<{ params: ProductDetailsParams }> = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <ProductDetails uniqueVal={id} />
    </div>
  );
};

export default Page;