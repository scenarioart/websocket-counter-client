import React from "react";
import { createGlobalStyle } from "styled-components";

const Wrapper = createGlobalStyle`
  body{
    margin:0;
  }
}
`;

export const GlobalStyle = () => (
  <>
    <Wrapper />
  </>
);
