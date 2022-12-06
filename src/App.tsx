import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AppStyled, SideBar, ToolColumn } from "./Kanban/App.styled";
import { Kanban } from "./Kanban/Kanban";
import { GlobalStyles } from "./GlobalStyles";
import { UserContext } from "./Context";

function App() {
  const [isDevMode, setIsDevMode] = useState(false);

  return (
    <>
      <UserContext.Provider
        value={{
          isDevMode,
          setDevMode: () => setIsDevMode(true),
          unsetDevMode: () => setIsDevMode(false),
        }}
      >
        <GlobalStyles />

        <AppStyled>
          <SideBar />
          <ToolColumn />

          <DndProvider backend={HTML5Backend}>
            <Kanban />
          </DndProvider>
        </AppStyled>
      </UserContext.Provider>
    </>
  );
}

export default App;
