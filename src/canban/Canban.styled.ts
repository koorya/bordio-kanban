import styled from "styled-components";

export const CanbanContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const CanbanHeader = styled.div`
  flex-basis: 80px;
  background: #ffffff;
  box-shadow: 0px 2px 4px #f0f1f2;

  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
`;

export const HeaderGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
`;

export const ButtonsRounded = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;

  background: #0094ff;
  border-radius: 50px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;

  width: 119px;
  height: 40px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ButtonsRoundedArrowed = styled(ButtonsRounded)`
  background: #f5f8fa;
  color: #222222;
`;

export const CanbanBody = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  position: relative;
  padding-left: 10px;
  &::after {
    width: 100%;
    height: 0px;
    border-top: 1px solid #f3f3f3;
    content: "";
    position: absolute;
    top: 57px;
    left: 0px;
  }
`;

export const Avatar = styled.div`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  background-color: bisque;
`;

export const SearchInput = styled.input`
  border-radius: 50px;
  height: 40px;
  padding: 0px 10px;
  background: #f5f8fa;
  border: none;
  &:focus {
    outline: none;
  }
`;
export const Notification = styled.div`
  border-radius: 50px;
  width: 40px;
  height: 40px;
`;
