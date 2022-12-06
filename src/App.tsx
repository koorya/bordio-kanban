import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AppStyled, SideBar, ToolColumn } from "./Kanban/App.styled";
import { Kanban } from "./Kanban/Kanban";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />

      <AppStyled>
        <SideBar />
        <ToolColumn />

        <DndProvider backend={HTML5Backend}>
          <Kanban />
        </DndProvider>
      </AppStyled>
    </>
  );
}

export default App;
