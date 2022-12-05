import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
  
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* border: 0.1px red solid; */
  }
  body, #root{
    /* color: green; */
    font-family: "Roboto", sans-serif;
    margin: 0px;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    height: 100vh;
  }

`;
