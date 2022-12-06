import styled from "styled-components";

export const CreateColumnStyled = styled.div`
  flex-grow: 1.3;
  flex-basis: 0px;
  /* min-width: 242px; */
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-left: 1px solid #f3f3f3;
`;

export const CreateColumnTitle = styled.div`
  /* padding: 10px; */
  justify-content: start;
  display: flex;
  align-items: flex-end;
  height: 58px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #aaaaaa;
`;

export const Button = styled.div`
  margin: 12px 35px;
`;
export const CreateColumnBody = styled.div`
  /* justify-self: stretch; */
`;
