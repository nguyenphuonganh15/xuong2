export default function ButtonAction() {
  return (
    <div
      className="absolute flex justify-between lg:w-[52%] mb:w-[80%] -translate-y-1/2 *:duration-300 *:cursor-pointer 
lg:left-[37.5%] lg:top-1/2 *:shadow-xl mb:top-[73.5%] *:w-9 *:h-9 *:grid *:place-items-center *:rounded-[50%] *:bg-white"
    >
      <button className="hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-left"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button className="hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
