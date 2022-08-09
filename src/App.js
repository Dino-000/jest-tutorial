import "./App.css";
import Async from "./components/Async/Async";
import Greeting from "./components/Greeting";
import ColorButton from "./components/ColorButton/ColorButton";

function App() {
  return (
    <div className="App">
      <Greeting />
      <ColorButton />
      <Async />
    </div>
  );
}

export default App;
