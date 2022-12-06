import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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

        <DndProvider backend={HTML5Backend}>
          <Canban />
        </DndProvider>
      </AppStyled>
    </>
  );
}

export default App;
