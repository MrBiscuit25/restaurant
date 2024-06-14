const DishCard = ({ name, price, availiable, image }) => {
  return (
    <div className="bg-[#1f1f2b] items-center rounded-xl flex flex-col pb-6">
      <img
        className="-mt-7 mb-2 "
        src={image}
        width="120"
        height="120"
        alt=""
      />{" "}
      <div
        className="text-4 leading-[130%] font-medium mb-2
        text-center max-w-[150px]"
      >
        {name}
      </div>{" "}
      <div className="text-4 leading-[140%] font-normal mb-1 mt-auto">
        $ {price}
      </div>{" "}
      <div className="text-4 leading-[140%] text-[#abbbc2] mt-auto">
        {availiable} Bowls availiable
      </div>
    </div>
  );
};

export default DishCard;
