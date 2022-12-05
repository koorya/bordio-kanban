import React from "react";
import { AppStyled, SideBar, ToolColumn } from "./canban/App.styled";
import { Canban } from "./canban/Canban";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppStyled>
        <SideBar />
        <ToolColumn />
        <Canban />
      </AppStyled>
    </>
  );
}

export default App;
