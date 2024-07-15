export default function CardProduct({ sale }: { sale: boolean }) {
  return (
    <div className="flex flex-col justify-between overflow-hidden h-full rounded-xl">
      {/* img */}
      <div className="relative group w-full h-[240px] bg-[#F4F4F4] rounded-xl grid place-items-center">
        <img className="w-[164px] h-[164px]" src="../Images/product_5.png" />
        <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
          Out Of Stock
        </button>
        {sale ? (
          <section className="absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
            $60 ounce
          </section>
        ) : null}
      </div>
      {/* about */}
      <div className="w-full h-[304px] flex flex-col justify-between items-center">
        <strong className="uppercase font-light text-center text-[#9D9EA2]">
          flower
        </strong>
        <strong className="text-lg line-clamp-2 font-normal text-[#1A1E26] my-1">
          2 Oz Deal Ahi Tuna + Master <br />
          Tuna
        </strong>
        <section className="w-[163px] h-[21px] *:text-sm flex justify-between items-start">
          <div className="flex items-start">
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
            <strong>4.6/5</strong>
          </div>
          |
          <div className="flex gap-x-2">
            <strong>135</strong>
            <span className="text-[#C8C9CB]">Reviews</span>
          </div>
        </section>
        <section className="bg-[#F2F6F4] w-[92px] h-[28px] lg:-translate-y-1 text-xs rounded grid place-items-center my-3">
          Sativa 100%
        </section>
        <div className="flex my-2 lg:-translate-y-1.5">
          <span className="text-[#EB2606]">$ 80.00</span>
          <span>/ gram</span>
        </div>
        <div className="flex *:text-xs *:py-[7px] *:px-[10px] gap-x-2 my-3 *:border *:rounded lg:-translate-y-1.5">
          <button>28g</button>
          <button>1/2lb</button>
          <button>1/4lb</button>
        </div>
        <button className="bg-[#17AF26] w-[128px] h-[40px] grid place-items-center rounded-[100px] text-sm text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
