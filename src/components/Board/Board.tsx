import { useState } from "react";
import Column from "./Column";
import BurnBurrel from "./BurnBurrel";
const Board = () => {
  const DEFAULT_CARDS = [
    { title: "Look into render bug in dushboard", id: "1", column: "backlog" },
    { title: "SOX compliance checklist", id: "2", column: "backlog" },
    { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
    { title: "Document Notification service", id: "4", column: "backlog" },

    {
      title: "Research DB options for a new microservice",
      id: "5",
      column: "todo",
    },
    { title: "Postmortem for outage", id: "6", column: "todo" },
    { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

    {
      title: "Refactor context providers to use Zustand",
      id: "8",
      column: "doing",
    },
    { title: "Add logging to daily CRON", id: "9", column: "doing" },
    {
      title: "Set up DD dashboard for Lambda listener",
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
