import { Link } from "react-router-dom";

export default function CardBlog() {
  return (
    <div className="flex flex-col">
      <img
        className="w-full h-[240px] border-none bg-[#F2F6F4]"
        src="../Images/web_edu_1.png"
      />
      <div>
        <span className="block text-sm text-[#717378] font-light mt-6">
          January 24, 2023
        </span>
        <h4 className="text-[24px] text-[#1A1E26] -tracking-[0.5px] font-medium mt-2.5 mb-2">
          12 Mistakes To Avoid When Buying Cannabis Online
        </h4>
        <p className="text-[16px] leading-[24px] text-[#717378] mb-8">
          Buying cannabis online can be a great way to get your hands on the
          products you need without leaving the comfort of your home. But …
        </p>
        <Link to="#" className="text-[#17AF26] underline">
          Read More
        </Link>
      </div>
    </div>
  );
}
