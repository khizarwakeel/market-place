import Herosection from "@/components/views/herosection";
import ProductsList from "@/components/views/productsList";
import Promotion from "@/components/views/promotion";

export default function Home() {
  return (
    <main>
      <Herosection />
      <Promotion />
      {/* <ProductsList /> */}
    </main>
  );
}