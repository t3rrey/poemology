import "./App.css";
import Header from "./components/Header";
import axios from 'axios';

import Poem from "./components/Poem";

function App() {
  return (
    <div className="App">
      <Header />
      <Poem
        title="My favourite poem"
        author="Lachlan Terrey"
        content="test"
        likes="100"
      />
    </div>
  );
}

const getPoem = async () => {
    axios.get()
}
export default App;
