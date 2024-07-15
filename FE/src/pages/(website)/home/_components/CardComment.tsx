export default function CardComment() {
  return (
    <div className="flex flex-col justify-between overflow-hidden h-full rounded-xl border lg:p-[40px]">
      {/* comment and user */}
      <div className="w-full h-[252px] rounded-xl">
        {/* infor user */}
        <div className="flex items-center gap-[16px]">
          <img
            className="w-[36px] h-[36px] bg-gray-200  rounded-[50%] p-1"
            src="../Images/img_product.png"
          />
          <span>Vikki Starr</span>
        </div>
        <hr className="my-8" />
        {/* comment */}
        <div className="flex flex-col lg:mt-0.5 h-[152px] gap-y-4">
          {/* start */}
          <div className="flex items-center gap-1">
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
          <p>
            Absolutely love TopShelfBC; affordable on any budget and such fast
            delivery, straight to my door! I recommend them to all my friends
            and family for their 420 needs.
          </p>
        </div>
      </div>
      {/* about */}
      <div className="w-full flex flex-col justify-between">
        <strong className="font-light text-left text-[#9D9EA2] text-sm">
          January 15, 2023
        </strong>
      </div>
    </div>
  );
}
