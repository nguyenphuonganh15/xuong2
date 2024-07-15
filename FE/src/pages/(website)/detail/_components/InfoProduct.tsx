import { CiStar } from "react-icons/ci";
import Activities from "./Activities";
import ButtonBuy from "./ButtonBuy";
import TabInfo from "./TabInfo";

export default function InfoProduct() {
  return (
    <div className="flex flex-col gap-5 max-w-[640px]">
      <span className="text-[#9D9EA2] lg:text-sm mb:text-xs lg:tracking-[4px] mb:tracking-[2px]">
        CONCENTRATES
      </span>

      <h1 className="lg:text-[32px] lg:mt-[1px] mb:mt-3.5 mb:text-[20px] lg:tracking-[-1.2px] font-medium lg:leading-[38.4px] max-w-[530px]">
        Mix And Match Shatter/Budder 28g (4 X 7G)
      </h1>

      <div className="*:bg-[#F2F6F4] *:lg:rounded-lg *:lg:px-4 *:lg:py-2.5 *:text-[#05422C] flex items-center lg:gap-x-4 *:text-xs lg:my-0 mb:mt-3 mb:mb-2 *:mb:px-2.5 *:mb:py-[5.5px] mb:gap-2 *:mb:rounded">
        <button>Indica</button>
        <button>Sativa 100%</button>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-medium text-[#EB2606] lg:text-xl lg:tracking-[0.7px] mb:text-base flex items-center lg:gap-x-3 lg:mt-0.5 mb:gap-x-2">
          <del className="font-light lg:text-sm mb:text-sm text-[#9D9EA2]">
            $200.00
          </del>
          $120.00
        </span>

        <div className="lg:w-[163px] mb:w-[157px] mb:mt-[8px] lg:mt-0 h-[21px] *:lg:text-sm *:mb:text-xs flex justify-between items-center">
          <div className="flex items-center lg:gap-x-0 mb:gap-x-1">
            <CiStar className="w-4 h-4" />
            <strong>4.6/5</strong>
          </div>
          <div className="flex items-center gap-x-2">
            <strong>135</strong>
            <span className="text-[#C8C9CB]">Reviews</span>
          </div>
        </div>
      </div>

      <Activities />

      <div className="flex flex-col lg:gap-y-3 mb:gap-y-2 lg:mt-[2px] mt-[3px] lg:pb-0 mb:pb-[21px]">
        <span className="text-xs tracking-[1px] text-[#717378]">
          DESCRIPTION
        </span>
        <p className="text-[14px] text-[#46494F]">
          Jungle Diamonds is a slightly indica dominant hybrid strain (60%
          indica/40% sativa) created through crossing the infamous Slurricane X
          Gorilla Glue #4 strains.
        </p>
      </div>

      <div className="flex flex-col lg:gap-y-[22px] border-t lg:mt-[5px] lg:py-5 mb:py-6">
        <div className="grid lg:grid-cols-[48.5%_48.5%] justify-between items-start">
          <div className="*:text-xs flex flex-col gap-y-3 lg:mt-0 mb:-mt-1">
            <span className="text-[#717378] lg:translate-y-0 mb:translate-y-1 tracking-[1px] uppercase">
              WEIGHT
            </span>
            <section className="*:lg:px-[13.5px] *:lg:py-2.5 *:mb:px-3.5 *:mb:py-2 *:rounded flex gap-x-4 *:duration-200">
              <button className="hover:border border-[#17AF26] border">
                28g
              </button>
              <button className="hover:border-[#17AF26] border bg-[#F4F4F4] hover:bg-[#F3FBF4] border-[#F3FBF4]">
                1/2lb
              </button>
              <button className="hover:border-[#17AF26] border bg-[#F4F4F4] hover:bg-[#F3FBF4] border-[#F3FBF4]">
                1/4lb
              </button>
            </section>
          </div>

          <div className="flex flex-col lg:gap-y-4 gap-y-3 lg:mt-0 mb:mt-7">
            <span className="text-[#717378] text-xs lg:tracking-[1px] tracking-[0.8px] uppercase">
              Add Integra Pack
            </span>
            <section className="*:text-sm *:py-1 flex lg:gap-x-12 gap-x-14 *:duration-200">
              <div className="flex items-center *:lg:px-3.5 *:mb:px-2.5">
                <input
                  className="rounded-lg w-[22px] h-[22px]"
                  type="checkbox"
                />
                <span>4g (+$2.00)</span>
              </div>
              <span>8g (+$3.00)</span>
            </section>
          </div>
        </div>

        <div className="bg-[#FEF8E8] lg:tracking-0 tracking-[0.0002px] px-3.5 py-2 rounded-[100px] lg:w-[342px] lg:mt-0 mb:mt-[18px] mb:w-full text-sm">
          Purchase this product now and earn
          <span className="text-[#EB2606]"> 80</span> Points!
        </div>
      </div>

      <ButtonBuy />

      <div className="grid lg:grid-cols-[49%_49%] justify-between lg:gap-y-0 mb:gap-y-4 lg:text-sm mb:text-xs *:flex border-t lg:pt-6 lg:mt-0 mb:pt-[18px] mb:mt-5 mb:grid-cols-full">
        <span className="lg:gap-x-[84px] gap-x-[78px] font-light text-[#717378]">
          SKU
          <p className="font-normal text-[#060709]">:&nbsp;&nbsp;&nbsp; N/A</p>
        </span>
        <span className="font-light text-[#717378] lg:gap-x-[50px] mb:gap-x-10">
          Categories
          <p className="text-[#17AF26] font-normal">
            :&nbsp;&nbsp;&nbsp;&nbsp; AAAA Weed, Indica
          </p>
        </span>
      </div>

      <TabInfo />
    </div>
  );
}
