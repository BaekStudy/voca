import React from "react";
import styled from "styled-components";

function ChildProps({ name_, age_ }) {
  return (
    <Container>
      <div className="wrapper">
        <h1>자식 속성</h1>
        <div>이름 : {name_}</div>
        <div>나이 : {age_}</div>
      </div>
    </Container>
  );
}

const Container = styled("div")`
  .wrapper {
    width: 500px;
    height: 100px;
    border: solid 1px black;
    background-color: blue;
    margin: 50px auto;
    text-align: center;

    h1 {
      color: white;
    }

    div {
      color: white;
    }
  }
`;

export default ChildProps;
