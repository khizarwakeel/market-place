import Herosection from "@/components/views/herosection";
import ProductsList from "@/components/views/productsList";
import Promotion from "@/components/views/promotion";
import Subscribe from "@/components/views/subscribe";

export default function Home() {
  return (
    <main>
      <Herosection />
      <Promotion />
      <ProductsList />
      <Subscribe />
    </main>
  );
}