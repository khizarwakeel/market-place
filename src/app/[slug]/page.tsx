import { NextPage } from "next";
import ProductsCate from "@/components/dynamicRoutes/productsCate";

interface ParamsVal {
  slug: string;
}

const Page: NextPage<{ params: ParamsVal }> = ({ params }) => {
  const { slug } = params;
  return (
    <div>
      <ProductsCate category={slug} />
    </div>
  );
};

export default Page;