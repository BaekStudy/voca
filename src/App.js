import Hello from "./component/basicTheory/Hello";
import Welcome from "./component/basicTheory/Welcome";
import ParentState from "./component/basicTheory/ParentState";

function App() {
  return (
    <>
      <Hello />
      <Hello />
      <Welcome />
      <hr />
      <ParentState />
    </>
  );
}

export default App;
