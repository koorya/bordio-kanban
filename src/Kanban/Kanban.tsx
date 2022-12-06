import React, { useMemo } from "react";
import { useDragDropManager, useDrop } from "react-dnd";
import { CreateColumn } from "./AddColumn/CreateColumn";
import { KanbanBody, KanbanContainer } from "./Kanban.styled";
import { Column } from "./Column/Column";
import { getCardController } from "./controller/CardController";
import { KanbanHeader } from "./KanbanHeader";

export const Kanban = () => {
  const dndManager = useDragDropManager();

  const [, drop] = useDrop(() => ({
    accept: ["Card"],
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const cardController = useMemo(getCardController, []);

  const columnCtn = cardController.columnList.length;

  return (
    <KanbanContainer ref={drop}>
      {KanbanHeader()}
      <KanbanBody>
        {cardController.columnList.map(({ title, cardList }, idx) => (
          <Column
            cardMover={cardController}
            isDragging={dndManager.getMonitor().isDragging()}
            key={"column" + idx}
            cardList={cardList}
            title={title}
            isLast={idx + 1 === columnCtn}
          ></Column>
        ))}
        <CreateColumn></CreateColumn>
      </KanbanBody>
    </KanbanContainer>
  );
};
