import React, { useState } from "react";
import styled from "styled-components";
import ChildProps from "./ChildProps";

function ParentState() {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");

  function showName() {
    alert(name);
  }

  function showAge() {
    alert(age);
  }

  function setAgeFunc(e) {
    console.log(e.target.value);
    setAge(e.target.value);
  }

  function setNameFunc(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  return (
    <Container>
      <div className="Wrapper">
        <h1>부모 상태</h1>
        <button onClick={showName}> 이름을 보여줘 </button>
        <button onClick={showAge}> 나이를 보여줘 </button>
        <div className="input">
          이름 : <input type="text" onChange={setNameFunc} />
        </div>
        <div className="input">
          나이 : <input type="text" onChange={setAgeFunc} />
        </div>

        <ChildProps name_={name} age_={age} />
      </div>
    </Container>
  );
}

const Container = styled("div")`
  .Wrapper {
    margin: auto;
    text-align: center;
    border: solid 1px black;
    background-color: yellow;

    h1 {
      margin-bottom: 10px;
    }
    button {
      margin: 3px;
    }

    .input {
      margin: 10px 0px;
    }
  }
`;

export default ParentState;
