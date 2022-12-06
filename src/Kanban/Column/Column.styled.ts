import styled from "styled-components";

export const ColumnStyled = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  /* flex-shrink: 1; */
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const ColumnTitle = styled.div<{ cnt: string }>`
  justify-content: center;
  display: flex;
  align-items: flex-end;
  padding-bottom: 14px;
  height: 58px;

  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  color: #222222;
  &::after {
    content: "${({ cnt }) => cnt}";
    background-color: #eeeeee;
    border-radius: 10px;
    padding: 0px 8px;
    margin: 0px 7px;
    font-weight: 400;
    color: #aaaaaa;
  }
`;

export const ColumnBody = styled.div<{ isLast?: boolean }>`
  border-right: ${({ isLast }) => (isLast ? "none" : "1px solid #f3f3f3")};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-top: 40px;
  flex-grow: 1;
`;

export const CardStyled = styled.div<{
  color: string;
  time: string;
  isDone?: boolean;
}>`
  background-color: ${({ color, isDone }) => (isDone ? "#dddddd" : color)};
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
  color: #222222;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  border-radius: 8px;
  margin: 0px 10px;
  margin-bottom: 10px;
  padding: 16px 13px;
  display: flex;
  flex-direction: column;
  &::after {
    margin-top: 5px;
    color: #555555;
    font-size: 13px;
    content: "${({ time }) => time}";
  }
`;

export const DnDCardMask = styled.div<{ isDevMode?: boolean }>`
  border: ${({ isDevMode }) => (isDevMode ? "solid red 1px" : "none")};
  position: absolute;
  top: -45px;
  bottom: 45px;
  left: 0px;
  width: 100%;
`;

export const DnDColumnMask = styled.div<{ isDevMode?: boolean }>`
  border: ${({ isDevMode }) => (isDevMode ? "solid red 1px" : "none")};
  flex-grow: 1;
  position: relative;
  top: -45px;
`;
