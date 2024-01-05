import Logo from "/public/assets/Logo.webp";
import Image from "next/image";

const Header = () => {
  return (
    <section>
        <div className="flex">
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
            <input type="text" name="" id="" placeholder="Enter " />
          </div>
        </div>
    </section>
  );
};

export default Header;