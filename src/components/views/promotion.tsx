import Image from "next/image";
import Wrapper from "../shared/wrapper";
import girlImage from "/public/assets/event1.webp";

const Promotion = () => {
  return (
    <section className="mb-6">
      <Wrapper>
        <div className="text-center">
          <h3 className="text-[#0062f5]">PRODUCTS</h3>
          <h1 className="text-4xl font-bold py-4 pb-5">Check What We Have</h1>
        </div>
        <div className="lg:flex justify-between gap-4 h-full mt-10">
          <div className="flex flex-col gap-5">
            <div className="bg-[#d6d6d8] flex justify-between h-full items-center">
              <div className="mt-5 ml-8">
                <h3 className="text-4xl font-bold mb-3">GET 30% Off</h3>
                <p className="text-lg text-gray-600">For the summer season</p>
              </div>
              <div>
                <Image src={girlImage} alt="Girl" />
              </div>
            </div>
            <div className="bg-[#212121] h-full flex flex-col items-center justify-center text-white">
              <h3 className="text-4xl font-bold mb-4">GET 30% Off</h3>
              <h3 className="mb-3">USE PROMO CODE</h3>
              <h4 className="bg-[#474747] px-4 py-3 rounded-lg">
                DINEWEEKENDSALE
              </h4>
            </div>
          </div>
          <div className="bg-[#efe1c7] flex flex-col justify-between text-lg">
            <div className="mt-6 mx-5">
              <p className="font-bold">Flex Sweatshirt</p>
              <p>
                <del>$100.00</del>{" "}
                <ins className="no-underline text-gray-500">$75.00</ins>
              </p>
            </div>
            <div>
              <Image
                src={"/assets/event2.webp"}
                alt="Girl Clothe"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="bg-[#d7d7d9] flex flex-col justify-between text-lg">
            <div className="mt-6 mx-5">
              <p className="font-bold">Flex Push Button Bomber</p>
              <p>
                <del>$225.00</del>{" "}
                <ins className="no-underline text-gray-500">$190.00</ins>
              </p>
            </div>
            <div>
              <Image
                src={"/assets/event3.webp"}
                alt="Girl Clothe"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default Promotion;