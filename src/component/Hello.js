import React from "react";
import styled from "styled-components";
import World from "./World";

function Hello() {
  return (
    <EmptyContainer>
      <div className="Wrapper">
        <h1>Hello</h1>
        <World />
      </div>
    </EmptyContainer>
  );
}

const EmptyContainer = styled("EmptyContainer")`
  .Wrapper {
    border: 5px solid yellow;
    display: flex;
    justify-content: center;
  }
  h1 {
    margin: 0 5px;
  }
`;

export default Hello;
