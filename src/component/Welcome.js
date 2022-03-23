import React from "react";
import styled from "styled-components";

function Welcome() {
  return (
    <WelcomeContainer>
      <div>
        <h1>Welcome</h1>
      </div>
    </WelcomeContainer>
  );
}

const WelcomeContainer = styled("WelcomeContainer")`
  div {
    border: 1px solid black;
    background-color: red;
    margin: auto;
    text-align: center;
  }
`;

export default Welcome;
