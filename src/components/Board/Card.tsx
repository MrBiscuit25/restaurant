import DropIndicator from "./DropIndicator";
import { motion } from "framer-motion";
const Card = ({ title, id, column, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        draggable
        layoutId={id}
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grap rounded border border-neutral-700 bg-[#1F1D2B] p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </>
  );
};

export default Card;
