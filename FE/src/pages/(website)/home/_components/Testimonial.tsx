import ButtonAction from "./ButtonAction";
import CardComment from "./CardComment";

export default function Testimonial() {
  return (
    <div className="w-full text-left sm:-mt-[47px] hidden_scroll_x">
      <div className="lg:w-[1440px] mb:w-[342px] mx-auto flex justify-end">
        <strong className="lg:w-[1320px] mb:w-full lg:text-[64px] mb:text-[32px] lg:leading-[70px] mb:leading-[38px] lg:tracking-[-4.7px] mb:tracking-[-1.9px]">
          CUSTOMER TESTIMONIALS
        </strong>
      </div>
      {/* best comment  */}
      <div className="w-full relative flex sm:flex-row mb:flex-col mb:items-center justify-center lg:my-16 mb:my-8">
        <div className="lg:w-[1440px] mb:w-[342px] flex justify-end -mt-1.5 *:lg:h-[425px] *:sm:h-[350px] overflow-hidden pt-1">
          <div
            className="grid sm:gap-x-[32px] mb:w-[342px] sm:w-[95vw] mb:gap-y-10 sm:gap-y-0 sm:grid-cols-[379px_auto] mb:flex-col items-center lg:w-[1348px] 
  lg:translate-x-[28px]"
          >
            {/* content and user comment */}
            <div
              className="sm:w-full mb:w-[342px] text-white rounded-2xl lg:h-full mb:h-[348px] bg-[#05422C] flex flex-col 
    *:h-[46.5%] items-center gap-y-[23px] lg:px-10 lg:pt-[42px] lg:pb-[39px] mb:px-6 mb:pt-6 mb:pb-16 *:w-full mt-[3px]"
            >
              <strong className="w-10 h-4 lg:mt-[-1.5px] lg:font-bold font-normal lg:text-[32px] mb:text-[24px] lg:tracking-[-1.75px] mb:tracking-[-0.2px] lg:leading-[38px]">
                VOTED BEST ONLINE DISPENSARY IN CANADA
              </strong>
              <div className="w-10 h-4 border-t flex flex-col justify-between pt-6">
                <strong className="text-[30px] font-medium opacity-60">
                  Google
                </strong>
                <span className="lg:mt-3 mb:mt-6">EXELLENCET</span>
                <section className="flex gap-x-6 lg:mt-0 mb:mt-[18px]">
                  {/* start */}
                  <div className="flex *:w-[18px] *:h-[18px] items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  |
                  <div className="flex gap-x-2">
                    <span>on 135</span>
                    <span className="opacity-60">Reviews</span>
                  </div>
                </section>
              </div>
            </div>
            {/* coment desktop */}
            <div className="mb:hidden w-full sm:block h-full overflow-x-scroll hidden_scroll_x">
              <div className="grid grid-flow-col auto-cols-[379px] *:w-full h-full gap-x-[32px] ">
                <CardComment />
                <CardComment />
                <CardComment />
              </div>
            </div>
          </div>
        </div>

        <ButtonAction />
      </div>
    </div>
  );
}
