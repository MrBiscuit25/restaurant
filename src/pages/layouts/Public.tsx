import { useState } from "react";
import Board from "../../components/Board/Board";
const Public = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="h-screen min-w-[75vw] text-neutral-50">
        <Board />
      </div>
    </div>
  );
};

export default Public;
