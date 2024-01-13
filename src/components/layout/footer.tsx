import Image from "next/image";
import Wrapper from "../shared/wrapper";
import Logo from "/public/assets/Logo.webp";
import { Facebook, Instagram, TwitterIcon } from "lucide-react";

const Footer = () => {
  const companyData = [
    "About",
    "Terms of Use",
    "Privacy Policy",
    "How it Works",
    "Contact Us",
  ];
  const supportData = ["Support Carrer", "24h Service", "Quick Chat"];
  const contactData = ["Whatsapp", "Support 24h"];
  return (
    <section>
      <Wrapper>
        <div className="grid grid-cols-4 gap-28 py-10">
          <div>
            <div>
              <Image src={Logo} alt="O dine Logo" />
            </div>
            <div className="py-4">
              <p>
                Small, artisan label that offers a thoughtfully curated
                collection of high quality everyday essentials made.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#f1f1f1] p-3 rounded-md">
                <Facebook />
              </div>
              <div className="bg-[#f1f1f1] p-3 rounded-md">
                <Instagram />
              </div>
              <div className="bg-[#f1f1f1] p-3 rounded-md">
                <TwitterIcon />
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl text-gray-600 mb-5 font-bold">Company</h4>
            {companyData.map((item, index) => {
              return (
                <ul key={index}>
                  <li className="mb-2">{item}</li>
                </ul>
              );
            })}
          </div>
          <div>
            <h4 className="text-xl text-gray-600 mb-5 font-bold">Support</h4>
            {supportData.map((item, index) => {
              return (
                <ul key={index}>
                  <li className="mb-2">{item}</li>
                </ul>
              );
            })}
          </div>
          <div>
            <h4 className="text-xl text-gray-600 font-bold mb-5">Contact</h4>
            {contactData.map((item, index) => {
              return (
                <ul key={index}>
                  <li className="mb-2">{item}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </Wrapper>
      <div className="border-t border-black">
        <Wrapper>
          <div className="text-lg flex justify-between py-10">
            <p>Copyright © 2024 Dine Market</p>
            <p>
              Design by. <span className="font-bold">Weird Design Studio</span>
            </p>
            <p>
              Code by. <span className="font-bold">khizarwakeel on GitHub</span>
            </p>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default Footer;