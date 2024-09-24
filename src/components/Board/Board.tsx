import { useState } from "react";
import Column from "./Column";
import BurnBurrel from "./BurnBurrel";
const Board = () => {
  const DEFAULT_CARDS = [
    { title: "Check stock", id: "1", column: "backlog" },
    { title: "Clean the dishes", id: "2", column: "backlog" },
    { title: "Chicken fried rice", id: "3", column: "backlog" },
    { title: "Canton noodles with eggs", id: "4", column: "backlog" },

    {
      title: "Make the fried rice chiken noodles soup",
      id: "5",
      column: "dishes",
    },
    { title: "Chop the vegetables for noodles soup", id: "9", column: "doing" },
    {
      title: "Boil the beef stock",
      id: "10",
      column: "doing",
    },
  ];
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <>
      <div className="flex h-full w-full gap-3 p-12">
        <Column
          title="Dishes"
          column="dishes"
          headingColor="text-[#ff7ca3]"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="In progress"
          column="doing"
          headingColor="text-[#ffb572]"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="Complete"
          column="done"
          headingColor="text-emerald-200"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="Recent history"
          column="backlog"
          headingColor="text-neutral-500"
          cards={cards}
          setCards={setCards}
        />
        <BurnBurrel setCards={setCards} />
      </div>
    </>
  );
};

export default Board;
