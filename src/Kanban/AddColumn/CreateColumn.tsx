import React from "react";
import {
  Button,
  CreateColumnBody,
  CreateColumnStyled,
  CreateColumnTitle,
} from "./CreateColumn.styled";

export const CreateColumn = () => {
  return (
    <CreateColumnStyled>
      <CreateColumnTitle>
        <Button>+ Create status</Button>
      </CreateColumnTitle>
      <CreateColumnBody></CreateColumnBody>
    </CreateColumnStyled>
  );
};
