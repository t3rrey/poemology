import "./App.css";

import Poem from "./components/Poem";

function App() {
  return (
    <div className="App">
      <Poem
        title="My favourite poem"
        author="Lachlan Terrey"
        content="test"
        likes="100"
      />
    </div>
  );
}

export default App;
