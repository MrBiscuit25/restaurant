const DishCard = ({ name, price, availiable, image, onClick }) => {
  return (
    <div
      className="bg-[#1f1f2b] select-none group items-center rounded-xl flex flex-col pb-6 hover:cursor-pointer hover:drop-shadow-2xl"
      onClick={onClick}
    >
      <img
        className="-mt-7 mb-2 "
        src={image}
        width="120"
        height="120"
        alt=""
      />{" "}
      <div
        className="text-4 leading-[130%] font-medium mb-2
        text-center max-w-[150px] group-hover:text-orange-200"
      >
        {name}
      </div>{" "}
      <div className="text-4 leading-[140%] font-normal mb-1 mt-auto group-hover:text-orange-200">
        $ <span className="group-hover:text-orange-400">{price}</span>
      </div>{" "}
      <div className="text-4 leading-[140%] text-[#abbbc2] mt-auto ">
        Availiable <span className="">{availiable}</span>
      </div>
    </div>
  );
};

export default DishCard;
