import React from "react";
import styled from "styled-components";

function Welcome() {
  return (
    <Container>
      <div>
        <h1>Welcome</h1>
      </div>
    </Container>
  );
}

const Container = styled("div")`
  div {
    border: 1px solid black;
    background-color: red;
    margin: auto;
    text-align: center;
  }
`;

export default Welcome;
