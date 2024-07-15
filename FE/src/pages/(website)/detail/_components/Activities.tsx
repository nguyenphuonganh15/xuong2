export default function Activities() {
  return (
    <div className="py-5 px-6 border rounded-xl">
      <div className="flex flex-col gap-5">
        {/* Item - 1 */}
        <div className="flex gap-x-4">
          <img className="w-8 h-8" src="../Images/colorfilter.png" />
          <div className="flex flex-col lg:gap-y-[11px] lg:mt-0.5 mt-[2.5px] mb:gap-y-2.5 h-full">
            <span className="text-[#717378] text-xs tracking-[1px]">
              EFFECTS
            </span>
            <span className="text-[#060709] text-sm">
              Calming, Creative, Happy, Relaxing, Sleepy, Uplifting
            </span>
          </div>
        </div>
        {/* End Item - 1 */}
        {/* Item - 1 */}
        <div className="flex gap-x-4">
          <img className="w-8 h-8" src="../Images/relieve.png" />
          <div className="flex flex-col lg:gap-y-[11px] lg:mt-0.5 mt-[2.5px] mb:gap-y-2.5 h-full">
            <span className="text-[#717378] text-xs tracking-[1px]">
              MAY RELIEVE
            </span>
            <span className="text-[#060709] text-sm">
              Anxiety, Arthritis, Chronic Pain, Depression, Fatigue,
              Inflammation, Insomnia, Irregular Bowel Movements, Migraines, Mood
              Swings
            </span>
          </div>
        </div>
        {/* End Item - 1 */}
        {/* Item - 1 */}
        <div className="flex gap-x-4">
          <img className="w-8 h-8" src="../Images/asromas.png" />
          <div className="flex flex-col lg:gap-y-[11px] lg:mt-0.5 mt-[2.5px] mb:gap-y-2.5 h-full">
            <span className="text-[#717378] text-xs tracking-[1px]">
              AROMAS
            </span>
            <span className="text-[#060709] text-sm">
              Chemical, Citrus, Earthy, Pungent, Sour
            </span>
          </div>
        </div>
        {/* End Item - 1 */}
      </div>
    </div>
  );
}
