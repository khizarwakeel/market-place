import Image from "next/image";
import Wrapper from "../shared/wrapper";
import girlImage from "/public/assets/event1.webp";

const Promotion = () => {
  return (
    <section className="mt-10">
      <Wrapper>
        <div className="text-center">
          <h3 className="text-[#0062f5]">PRODUCTS</h3>
          <h1 className="md:text-4xl text-xl font-bold py-4 pb-5">
            Check What We Have
          </h1>
        </div>
        <div className="lg:flex lg:flex-row md:flex-col md:gap-10 h-full md:mt-10 mt-4">
          <div className="flex flex-col gap-5 mb-6">
            <div className="bg-[#d6d6d8] flex md:flex-row flex-col justify-between h-full items-center">
              <div className="mt-5 md:ml-8">
                <h3 className="md:text-4xl text-2xl font-bold mb-3 pt-5">
                  GET 30% Off
                </h3>
                <p className="md:text-lg text-sm text-gray-600">
                  For the summer season
                </p>
              </div>
              <div>
                <Image src={girlImage} alt="Girl" />
              </div>
            </div>
            <div className="bg-[#212121] h-full flex flex-col items-center justify-center text-white">
              <h3 className="md:text-4xl text-2xl font-bold mb-4 mt-6">
                GET 30% Off
              </h3>
              <h3 className="mb-3 md:text-base text-sm">USE PROMO CODE</h3>
              <h4 className="bg-[#474747] px-4 py-3 md:text-base text-sm rounded-lg mb-6">
                DINEWEEKENDSALE
              </h4>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between md:gap-10">
            <div className="bg-[#efe1c7] flex flex-col mb-6 justify-between items-center md:items-start text-lg">
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
            <div className="bg-[#d7d7d9] flex flex-col mb-6 justify-between items-center md:items-start text-lg">
              <div className="mt-6 mx-5">
                <p className="font-bold">Flex Push Button Bomber</p>
                <p>
                  <del>$225.00</del>{" "}
                  <ins className="no-underline text-gray-500">$190.00</ins>
                </p>
              </div>
              <div className="">
                <Image
                  src={"/assets/event3.webp"}
                  alt="Girl Clothe"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default Promotion;