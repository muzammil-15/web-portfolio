
import { testimonials } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infiniteMovingCard";
import { SparklesPreview } from "./SparklesComponent";

const Testimonail = () => {
  return (
    <div className="my-12 md:mt-5 w-full overflow-hidden">
      <div className=" my-10 px-10  flex flex-col  justify-between h-full items-center text-white max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center items-center">
        <h1 className='leading-normal md:text-[50px] text-[2rem] text-[#323232] font-[700] text-center py-16'>
            Testimonials
          </h1>
        </div>
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-transparent ] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonail;
