import React, { useContext } from "react";
import {
  KanbanHeaderStyled,
  ButtonsRounded,
  HeaderGroup,
  Avatar,
  SearchInput,
  Notification,
} from "./Kanban.styled";
import { DropDownButton } from "./DropDownButton/DropDownButton";
import { UserContext } from "../Context";

export const KanbanHeader = () => {
  const { isDevMode, setDevMode, unsetDevMode } = useContext(UserContext);

  return (
    <KanbanHeaderStyled>
      <HeaderGroup>
        <ButtonsRounded>+ Add new</ButtonsRounded>
        <DropDownButton
          title={"Kanban"}
          items={[
            { title: "Board view" },
            { title: "Table view" },
            { title: "Kanban" },
          ]}
        ></DropDownButton>

        <DropDownButton
          title={"Debug " + (isDevMode ? "on" : "off")}
          items={[
            { title: "on", handler: setDevMode },
            { title: "off", handler: unsetDevMode },
          ]}
        ></DropDownButton>
      </HeaderGroup>

      <HeaderGroup>
        <SearchInput />
        <Notification />
        <Avatar />
      </HeaderGroup>
    </KanbanHeaderStyled>
  );
};
