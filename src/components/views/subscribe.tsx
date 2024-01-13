import Wrapper from "../shared/wrapper";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Subscribe = () => {
  return (
    <section className="relative">
      <Wrapper>
        <div className="flex flex-col items-center text-center py-40">
          <div className="z-20">
            <h1 className="font-bold text-3xl">Subscribe Our Newsletter</h1>
            <p className="py-7 text-gray-500 text-sm">
              Get the latest information and promo offers directly
            </p>
          </div>
          <div className="flex gap-3">
            <div>
              <Input
                className="w-80 border-gray-500 rounded-none"
                placeholder="Input Email Address"
              />
            </div>
            <div>
              <Button className="rounded-none border-2 border-gray-700">
                Get Started
              </Button>
            </div>
          </div>
            </div>
        <div className="absolute top-0 bottom-0 flex items-center justify-center -z-10 left-0 right-0">
            <h4 className="text-9xl text-gray-100">Newsletter</h4>
        </div>
      </Wrapper>
    </section>
  );
};

export default Subscribe;