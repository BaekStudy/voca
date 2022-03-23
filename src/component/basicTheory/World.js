import React from "react";
import styled from "styled-components";

function World() {
  return (
    <Container>
      <div className="wrapper">
        <h1>World</h1>
      </div>
    </Container>
  );
}

const Container = styled("div")`
  .wrapper {
    border: 1px solid black;
    margin: 0px 3px;
  }
`;

export default World;
