import InfoProduct from "./_components/InfoProduct";

export default function DetailPage() {
  return (
    <main className="w-full *:lg:w-[1312px] *:w-[342px] *:mx-auto *:h-full lg:py-10 mb:py-6 lg:mt-0 mb:mt-0.5">
      <div className="flex gap-24 pb-[280px]">
        <div className="flex flex-col gap-7">
          <div className="bg-[#F4F4F4] p-20 rounded-lg ">
            <img className="w-[400px]" src="../Images/img_product.png" alt="" />
          </div>
          <ul className="flex *:bg-[#F4F4F4] gap-4 justify-center *:rounded-lg *:hover:cursor-pointer">
            <li className="p-2">
              <img className="w-14" src="../Images/img_product.png" alt="" />
            </li>
            <li className="p-2">
              <img className="w-14" src="../Images/img_product.png" alt="" />
            </li>
            <li className="p-2">
              <img className="w-14" src="../Images/img_product.png" alt="" />
            </li>
            <li className="p-2">
              <img className="w-14" src="../Images/img_product.png" alt="" />
            </li>
          </ul>
        </div>

        <div>
          <InfoProduct />
        </div>
      </div>
    </main>
  );
}
