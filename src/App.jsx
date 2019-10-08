import React from "react";
import styled from "styled-components";
import Routes from "./routes";
import { GlobalStyle } from "./GlobalStyle";

const Wrapper = styled.div`
  background-color: #ecf400;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Routes />
    </Wrapper>
  );
}

export default App;
