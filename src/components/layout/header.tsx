import Logo from "/public/assets/Logo.webp";
import Image from "next/image";

const Header = () => {
  return (
    <section>
        <div className="flex justify-between items-center">
          <div>
          <Image src={Logo} alt="O Dine Market" />
          </div>
          <div>
            <ul className="flex gap-10">
              <li>Female</li>
              <li>Male</li>
              <li>Kids</li>
              <li>All Products</li>
            </ul>
          </div>
          <div>
            <input type="search" name="Search" placeholder="What you looking for" className="border outline-none pl-2 w-80 border-gray-300" />
          </div>
          <div>
            <div className="bg-slate-300 h-10 w-10 rounded-full"></div>
          </div>
        </div>
    </section>
  );
};

export default Header;