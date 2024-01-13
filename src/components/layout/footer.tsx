import Image from "next/image";
import Wrapper from "../shared/wrapper";
import Logo from '/public/assets/Logo.webp'

const Footer = () => {
  return (
    <section>
      <Wrapper>
        <div className="grid grid-cols-4">
          <div>
            <Image src={Logo} alt="O dine Logo"  />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Footer;
