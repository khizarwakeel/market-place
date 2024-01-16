import Logo from "/public/assets/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";
import Wrapper from "../shared/wrapper";

const Header = () => {
  return (
    <section className="bg-slate-100 py-4">
      <Wrapper>
        <div className="flex justify-between items-center h-full">
          <Link href={"/"}>
            <div>
              <Image src={Logo} alt="O Dine Market" />
            </div>
          </Link>
          <div>
            <ul className="flex gap-10 font-semibold">
              <li>
                <Link href={"/Female"}>Female</Link>
              </li>
              <li>
                <Link href={"/Male"}>Male</Link>
              </li>
              <li>
                <Link href={"/Kids"}>Kids</Link>
              </li>
              <li>
                <Link href={"/All-Products"}>All Products</Link>
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
          <div className="relative">
            <div className="bg-gray-200 h-12 w-12 rounded-full flex justify-center items-center">
              <ShoppingCart />
            </div>
            <div className="bg-red-600 text-white text-sm absolute -top-1.5 right-1 h-5 w-5 text-center rounded-full ">
              {0}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Header;
