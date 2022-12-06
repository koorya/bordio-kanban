import styled from "styled-components";
import { ButtonsRounded } from "../Kanban.styled";

type Toggle = {
  isOpened?: boolean;
};

export const ButtonsRoundedArrowed = styled(ButtonsRounded)<Toggle>`
  position: relative;
  background: ${({ isOpened }) => (isOpened ? "#d5d8da" : "#f5f8fa")};
  color: #222222;
  cursor: pointer;
  &::after {
    margin-left: 10px;
    content: ">";
    transform: rotate(${({ isOpened }) => (isOpened ? "-90deg" : "90deg")})
      scale(0.8, 1.8);
  }
`;

export const DropDownList = styled.div`
  position: absolute;
  top: 40px;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
  padding: 6px;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

export const DropDownItem = styled.div`
  border-radius: 4px;
  padding: 10px;
  flex-basis: 40px;
  display: flex;
  align-items: center;
  align-self: stretch;
  &:hover {
    background: #f5f8fa;
  }
`;
