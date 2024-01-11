import Image from "next/image";
import Wrapper from "../shared/wrapper";

const Promotion = () => {
  return (
    <section className="mb-6">
      <Wrapper>
        <div className="text-center">
          <h3 className="text-[#0062f5]">PRODUCTS</h3>
          <h1 className="text-4xl font-bold py-4 pb-5">Check What We Have</h1>
        </div>
        <div className="lg:flex justify-between h-full mt-10">
          <div className="flex flex-col gap-5">
            <div className="bg-[#d6d6d8] flex">
              <div>GET UP TO 60% For the summer season</div>
              <div>
                <Image
                  src={"/assets/event1.webp"}
                  alt="Girl Clothe"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="bg-[#212121] flex">
              <div>GET UP TO 60% For the summer season</div>
              <div>
                <Image
                  src={"/assets/event1.webp"}
                  alt="Girl Clothe"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
          <div className="bg-[#efe1c7] flex flex-col justify-between">
            <div>
              <p>Flex Sweatshirt</p>
              <p>
                <del>$100.00</del> <ins className="no-underline">$75.00</ins>
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
          <div className="bg-[#efe1c7] flex flex-col justify-between">
            <div>
              <p>Flex Sweatshirt</p>
              <p>
                <del>$100.00</del> <ins className="no-underline">$75.00</ins>
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
        </div>
      </Wrapper>
    </section>
  );
};

export default Promotion;