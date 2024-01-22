"use client";
import Logo from "/public/assets/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";
import Wrapper from "../shared/wrapper";
import { usePathname } from "next/navigation";
import Sidebar from "../shared/sidebar";
import { useState } from "react";
import { AlignRight } from "lucide-react";

const Header = () => {
  const parthName = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-slate-100 py-7">
      <Wrapper>
        <div className="flex justify-between items-center h-full">
          <Link href={"/"}>
            <div>
              <Image src={Logo} alt="O Dine Market" />
            </div>
          </Link>
          <div className="lg:block hidden">
            <ul className="flex gap-10 font-semibold">
              <li>
                <Link
                  href={"/Female"}
                  className={`${parthName === "/Female" ? "text-red-600" : ""}`}
                >
                  Female
                </Link>
              </li>
              <li>
                <Link
                  href={"/Male"}
                  className={`${parthName === "/Male" ? "text-red-600" : ""}`}
                >
                  Male
                </Link>
              </li>
              <li>
                <Link
                  href={"/Kids"}
                  className={`${parthName === "/Kids" ? "text-red-600" : ""}`}
                >
                  Kids
                </Link>
              </li>
              <li>
                <Link
                  href={"/Suits"}
                  className={`${parthName === "/Suits" ? "text-red-600" : ""}`}
                >
                  Suits
                </Link>
              </li>
              <li>
                <Link
                  href={"/All-Products"}
                  className={`${
                    parthName === "/All-Products" ? "text-red-600" : ""
                  }`}
                >
                  All Products
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-1 relative">
            <div className="absolute left-1 lg:block hidden">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <div className="lg:block hidden">
              <input
                type="search"
                name="Search"
                placeholder="What you looking for"
                className="border outline-none pl-7 w-80 h-7 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="relative lg:block hidden">
            <div className="bg-gray-200 h-12 w-12 rounded-full flex justify-center items-center">
              <ShoppingCart />
            </div>
            <div className="bg-red-600 text-white text-sm absolute -top-1.5 right-1 h-5 w-5 flex justify-center items-center rounded-[40px]">
              {0}
            </div>
          </div>
          <div className="lg:hidden block">
            <Sidebar open={open} setOpen={setOpen} />
            <button onClick={() => setOpen(true)}>
              <AlignRight />
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Header;