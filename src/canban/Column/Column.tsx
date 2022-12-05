import React from "react";

import { Card, ColumnBody, ColumnStyled, ColumnTitle } from "./Column.styled";
import { CardType } from "./types";

export const Column = ({
  title,
  isLast,
  cardList,
}: {
  title: string;
  isLast?: boolean;
  cardList: CardType[];
}) => {
  return (
    <ColumnStyled>
      <ColumnTitle cnt={cardList.length + ""}>{title}</ColumnTitle>
      <ColumnBody isLast={isLast}>
        {cardList.map((card, index) => (
          <Card color={card.color} key={card.title + index} time={card.time}>
            {card.title}
          </Card>
        ))}
      </ColumnBody>
    </ColumnStyled>
  );
};
