import Wrapper from "../shared/wrapper";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";

const Herosection = () => {
  return (
    <section className="py-24">
      <Wrapper>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 items-center">
          <div>
            <div className="max-w-md">
              <div>
                <Badge className="bg-[#e1edff] text-[#0000ff] px-6 py-2 text-base rounded-md">
                  Sale 70%
                </Badge>
              </div>
              <div>
                <h1 className="scroll-m-20 text-4xl py-10 font-extrabold tracking-tight lg:text-5xl">
                  An Industrial Take on Streetwear
                </h1>
                <p>
                  Anyone can beat you but no one can beat your outfit as long as
                  you wear Dine outfits.
                </p>
              </div>
            </div>
            <div className="py-10">
              <Button className="py-7 px-8 rounded-none">
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
            <div className="flex gap-10">
              <Image
                src={"/assets/Featured1.webp"}
                alt="Bazar"
                width={300}
                height={300}
              />
              <Image
                src={"/assets/Featured2.webp"}
                alt="Bazar"
                width={300}
                height={300}
              />
              <Image
                src={"/assets/Featured3.webp"}
                alt="Bazar"
                width={300}
                height={300}
              />
              <Image
                src={"/assets/Featured4.webp"}
                alt="Bazar"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="bg-[#ffece3] rounded-full h-[570px] relative w-[590px]">
            <div className="absolute -top-10">
              <div className="ml-10">
                <Image
                  src={"/assets/header.webp"}
                  width={800}
                  height={800}
                  alt="Girl Image"
                  className="h-[620px] object-cover"
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