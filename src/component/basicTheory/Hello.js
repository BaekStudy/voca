import React from "react";
import styled from "styled-components";
import World from "./World";

function Hello() {
  return (
    <Container>
      <div className="Wrapper">
        <h1>Hello</h1>
        <World />
        <World />
      </div>
    </Container>
  );
}

const Container = styled("div")`
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
