import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <div className="wrapper">
        <h1>헤더</h1>
      </div>
    </Container>
  );
}

const Container = styled("div")`
  .wrapper {
    margin: auto;
    text-align: center;
  }
`;

export default Header;
