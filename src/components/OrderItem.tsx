import { useDispatch } from "react-redux";
import TrashBin from "../assets/TrashBin.svg?react";
import { decrementCount, incrementCount } from "../slices/orderSlice";
import { deleteDish } from "../slices/orderSlice";

const OrderItem = ({ price, name, image, count, category, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-x-4 pr-3">
      <div className="grow">
        <div className="flex">
          <img
            className="self-start pt-2"
            src={image}
            width="40"
            height="40"
            alt=""
          />
          <div className="text-shrink shrink-0 flex flex-col  mb-4 ml-2 font-medium">
            <div>{name}</div>
            <div className="text-sm text-[#abbbc2]">$ {price}</div>
          </div>
          <div className="flex items-center gap-x-2 input-wrapper w-14 ml-auto h-10 rounded-lg bg-[#2d303e] text-[#889898]">
            <button
              className="text-xl h-[100%] hover:text-green-700 hover:bg-green-400 rounded-l-lg"
              onClick={() => {
                dispatch(incrementCount({ category, id }));
              }}
            >
              +
            </button>
            <div className="text-xl min-w-4 grow text-center">{count}</div>
            <button
              className="text-3xl h-[100%] hover:text-red-700 hover:bg-[#ea7c69] rounded-r-lg"
              onClick={() => {
                dispatch(decrementCount({ category, id }));
              }}
            >
              -
            </button>
          </div>
        </div>
        <input
          className="rounded min-w-70 w-[100%] h-12 bg-[#2d303e] text-[#889898] pl-3"
          placeholder="Order Note..."
          type="text"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="pt-3 font-medium text-md w-12">
          ${(price * count).toFixed(2)}
        </div>
        <button
          className="p-3 text-[#ea7c69] self-end hover:text-white border-[1px] border-[#ea7c69]  hover:bg-[#ea7c69]  rounded"
          onClick={() => dispatch(deleteDish({ id }))}
        >
          <TrashBin />
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
