import React, { useMemo } from "react";
import { useDragDropManager, useDrop } from "react-dnd";
import { CreateColumn } from "./AddColumn/CreateColumn";
import {
  CanbanBody,
  CanbanContainer,
  CanbanHeader,
  ButtonsRounded,
  ButtonsRoundedArrowed,
  HeaderGroup,
  Avatar,
  SearchInput,
  Notification,
} from "./Canban.styled";
import { Column } from "./Column/Column";
import { getCardController } from "./controller/CardController";

export const Canban = () => {
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
    <CanbanContainer ref={drop}>
      <CanbanHeader>
        <HeaderGroup>
          <ButtonsRounded>+ Add new</ButtonsRounded>
          <ButtonsRoundedArrowed>Canban</ButtonsRoundedArrowed>
          <ButtonsRoundedArrowed>Filter</ButtonsRoundedArrowed>
        </HeaderGroup>

        <HeaderGroup>
          <SearchInput />
          <Notification />
          <Avatar />
        </HeaderGroup>
      </CanbanHeader>
      <CanbanBody>
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
      </CanbanBody>
    </CanbanContainer>
  );
};
