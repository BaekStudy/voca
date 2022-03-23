import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import ParentState from "./component/ParentState";

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
