import Dollar from "../../public/icons/money.svg?react";

const StatisticsCard = ({ mainIcon, secondaryIcon, price, title, stats }) => {
  return (
    <div className="flex grow min-h-[200px] justify-around flex-col gap-y-1 card py-4 pl-4 pr-6 rounded-lg bg-[#1f1d2b]">
      <div className="flex items-center gap-x-2">
        <div className="bg-[#252836] p-2 rounded-lg">{mainIcon}</div>
        <div className="flex items-center gap-x-1">
          {stats}
          {secondaryIcon}
        </div>
      </div>
      <div className="font-bold text-2xl">${price}</div>
      <div className="font-semibold text-lg leading-[130%] text-[#abbbc2]">
        {title}
      </div>
    </div>
  );
};

export default StatisticsCard;
