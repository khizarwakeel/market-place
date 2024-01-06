import Logo from "/public/assets/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";

const Header = () => {
  return (
    <section className="bg-slate-100 py-4">
      <div className="max-w-screen-xl mx-8 lg:mx-auto">
      <div className="flex justify-between items-center h-full">
        <div>
          <Image src={Logo} alt="O Dine Market" />
        </div>
        <div>
          <ul className="flex gap-10">
            <li>
              <Link href={""}>Female</Link>
            </li>
            <li>
              <Link href={""}>Male</Link>
            </li>
            <li>
              <Link href={""}>Kids</Link>
            </li>
            <li>
              <Link href={""}>All Products</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1 relative">
          <div className="absolute left-1">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <div>
            <input
              type="search"
              name="Search"
              placeholder="What you looking for"
              className="border outline-none pl-7 w-80 h-7 border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <div className="bg-gray-200 h-12 w-12 rounded-full flex justify-center items-center">
            <ShoppingCart />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Header;