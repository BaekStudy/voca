import React from "react";
import styled from "styled-components";

function Hello() {
  return (
    <HelloContainer>
      <h1>Hello</h1>
    </HelloContainer>
  );
}

const HelloContainer = styled("h1")`
  color: blue;
  padding: 10px;
  margin: 10px;
`;

export default Hello;
