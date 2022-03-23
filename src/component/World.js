import React from "react";
import styled from "styled-components";

function World() {
  return (
    <WorldContainer>
      <h1>World</h1>
    </WorldContainer>
  );
}

const WorldContainer = styled("WorldContainer")`
  border: 1px solid black;
`;

export default World;
