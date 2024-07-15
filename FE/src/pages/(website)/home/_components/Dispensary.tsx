import { Link } from "react-router-dom";
import CarfProduct from "./CardProduct";
import ButtonAction from "./ButtonAction";

export default function Dispensary() {
  return (
    <div className="w-full text-center lg:py-[120px] mb:pt-16 mb:pb-[42px]">
      <div className="lg:w-[948px] mx-auto mb:w-[342px]">
        <strong className="lg:text-[64px] mb:text-[32px] lg:leading-[70px] mb:leading-[38.5px] lg:tracking-[-4.8px] mb:tracking-[-1.8px]">
          BEST DISPENSARY TO BUY WEED ONLINE IN CANADA
        </strong>
      </div>
      {/* menu service */}
      <div className="w-full flex justify-center lg:my-[62px] mb:mt-8">
        <div
          className="lg:grid hidden_scroll_x lg:grid-cols-[378.67px_378.67px_378.67px] mb:flex mb:w-[342px] lg:w-auto mb:overflow-x-auto lg:ml-0 mb:flex-nowrap *:mb:px-[20px] 
*:whitespace-nowrap *:lg:px-0 md:gap-x-[32px] grid-flow-row \
mb:gap-x-[16px] *:mb:h-[40px] *:sm:h-[48px] *:lg:text-base *:mb:text-sm *:rounded-[100px] *:bg-[#F2F6F4"
        >
          <button className="border border-[#05422C] bg-[#F2F6F4]">
            Best Sellers
          </button>
          <button className="border border-[#F4F4F4]">
            Bundles &amp; Promotions
          </button>
          <button className="border border-[#F4F4F4]">On Sale</button>
        </div>
      </div>
      {/* products best seler  */}
      <div className="w-full relative flex sm:flex-row mb:flex-col mb:items-center justify-center lg:my-16 mb:my-[22px] mb:overflow-x-auto hidden_scroll_x">
        <div className="lg:w-[1440px] flex justify-end *:lg:h-[568px] *:sm:h-[350px] overflow-hidden">
          <div
            className="grid sm:gap-x-[32px] mb:w-[342px] sm:w-[95vw] mb:gap-y-10 sm:gap-y-0 sm:grid-cols-[379px_auto] mb:flex-col items-center 
  lg:w-[1348px] rounded-xl lg:translate-x-[28px]"
          >
            {/* banner */}
            <div
              className="sm:w-full mb:w-[342px] md:mt-0 mb:mt-[18px] lg:rounded-xl mb:rounded-2xl lg:h-full sm:h-[350px] mb:h-[395px] border bg-[#05422C] flex flex-col 
      items-center justify-center gap-y-6"
            >
              <img
                src="../Images/img_product.png"
                className="lg:w-[213px] lg:h-[213px] mb:w-[151px] mb:h-[151px]"
              />
              <div className="h-[163px] flex flex-col justify-between">
                <strong className="text-white text-xl font-medium">
                  Shop our Best Sellers
                </strong>
                <p className="w-[216px] text-[14px] leading-[21px] opacity-60 text-white font-light -translate-y-[5px]">
                  Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum
                  varius lorem blandit lectus magnis feugiat.{" "}
                </p>
                <Link to="#" className="text-[#17AF26] text-sm underline">
                  View All
                </Link>
              </div>
            </div>
            {/* product desktop */}
            <div className="mb:hidden sm:block h-full overflow-x-auto hidden_scroll_x">
              <div className="grid grid-flow-col auto-cols-[291px] *:w-full h-full gap-x-[32px] ">
                <CarfProduct sale={false} />
                <CarfProduct sale={true} />
                <CarfProduct sale={false} />
              </div>
            </div>
          </div>
        </div>

        {/* back, next */}
        <ButtonAction />
      </div>
      {/* ---- */}
    </div>
  );
}
