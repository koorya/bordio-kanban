import React, { useContext } from "react";
import { useDrop } from "react-dnd";
import { UserContext } from "../../Context";
import { CardMover, CardType } from "../controller/CardController";
import { Card } from "./Card";

import {
  ColumnBody,
  ColumnStyled,
  ColumnTitle,
  DnDColumnMask,
} from "./Column.styled";

export const Column = ({
  title,
  isLast,
  cardList,
  isDragging,
  cardMover,
}: {
  title: string;
  isLast?: boolean;
  cardList: CardType[];
  isDragging: boolean;
  cardMover: CardMover;
}) => {
  const [, drop] = useDrop<CardType>(() => ({
    accept: ["Card"],
    drop: (item, monitor) => {
      cardMover.moveCardToColumn(item, title);
    },
  }));
  const { isDevMode } = useContext(UserContext);
  return (
    <ColumnStyled>
      <ColumnTitle cnt={`${cardList.length}`}>{title}</ColumnTitle>
      <ColumnBody isLast={isLast}>
        {cardList.map((card, index) => (
          <Card
            inserter={cardMover}
            card={card}
            key={card.title + index}
            isComplete={isLast}
            isDragging={isDragging}
          />
        ))}
        {isDragging && <DnDColumnMask isDevMode={isDevMode} ref={drop} />}
      </ColumnBody>
    </ColumnStyled>
  );
};
