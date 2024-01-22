import Wrapper from "../shared/wrapper";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";

const Herosection = () => {
  return (
    <section className="lg:py-16 mt-10">
      <Wrapper>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 items-center">
          <div className="max-w-md">
            <div>
              <div>
                <Badge className="bg-[#e1edff] text-[#0000ff] px-6 py-2 text-base rounded-md">
                  Sale 70%
                </Badge>
              </div>
              <div>
                <h1 className="scroll-m-20 md:text-4xl text-xl py-10 font-extrabold tracking-tight lg:text-5xl">
                  An Industrial Take on Streetwear
                </h1>
                <p>
                  Anyone can beat you but no one can beat your outfit as long as
                  you wear Dine outfits.
                </p>
              </div>
            </div>
            <div className="py-10">
              <Button className="md:py-7 md:px-8 rounded-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Start Shopping
              </Button>
            </div>
            <div className="md:block hidden">
              <div className="flex gap-10">
                <Image
                  src={"/assets/Featured1.webp"}
                  alt="Bazar"
                  width={200}
                  height={200}
                />
                <Image
                  src={"/assets/Featured2.webp"}
                  alt="Bazar"
                  width={200}
                  height={200}
                />
                <Image
                  src={"/assets/Featured3.webp"}
                  alt="Bazar"
                  width={200}
                  height={200}
                />
                <Image
                  src={"/assets/Featured4.webp"}
                  alt="Bazar"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="bg-[#ffece3] md:h-[35rem] relative md:w-[35rem] h-[17rem] w-[17rem] mx-auto rounded-full lg:mt-0 md:mt-20 mt-10">
            <div className="absolute -top-10">
              <div className="ml-10">
                <Image
                  src={"/assets/header.webp"}
                  width={800}
                  height={800}
                  alt="Girl Image"
                  className="md:h-[620px] h-[320px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Herosection;
