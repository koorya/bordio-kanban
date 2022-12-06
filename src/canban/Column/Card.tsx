import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { CardInserter, CardType } from "../controller/CardController";
import { CardStyled, DnDCardMask } from "./Column.styled";
export const Card = ({
  isComplete,
  card,
  isDragging,
  inserter,
}: {
  card: CardType;
  isComplete?: boolean;
  isDragging: boolean;
  inserter: CardInserter;
}) => {
  const { color, time, title } = card;
  const [{ opacity }, dragRef] = useDrag(() => {
    return {
      type: "Card",
      item: card,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    };
  });

  const [, drop] = useDrop<CardType>(() => ({
    accept: ["Card"],
    drop: (item, monitor) => {
      inserter.insertBefore(item, card);
    },
  }));

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <CardStyled
        ref={dragRef}
        isDone={isComplete}
        color={color}
        time={time}
        style={{
          opacity,
        }}
      >
        {title}
      </CardStyled>

      {isDragging && <DnDCardMask ref={drop} />}
    </div>
  );
};
