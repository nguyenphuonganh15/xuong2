import { Link } from "react-router-dom";
import CardBlog from "./CardBlog";

export default function Education() {
  return (
    <div className="w-full bg-[#F4F4F4] lg:pb-[300px] lg:pt-16 mb:pt-[50px] mb:pb-[236.5px] flex justify-center lg:mt-[100px]">
      <div className="lg:w-[1200px] mb:w-[342px] pt-20">
        <div className="lg:mb-8 mb:mb-6 flex justify-between items-center">
          <strong className="lg:text-[32px] mb:text-2xl lg:tracking-[-1.7px] tracking-[-1.05px]">
            WEED EDUCATION
          </strong>
          <Link
            to="#"
            className="text-base text-[#17AF26] underline lg:tracking-[-0.5px] tracking-[-0.8px]"
          >
            Show All
          </Link>
        </div>
        <div className="w-full lg:pt-[66px] lg:-mt-0.5 mb:mt-14 lg:gap-y-0 gap-y-[23px] border-t grid lg:grid-cols-[379px_379px_379px] lg:justify-between *:rounded-xl">
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
      </div>
    </div>
  );
}
