import "./styles/App.css";
import Header from "./components/Header";
import PoemList from "./components/PoemList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InputPoem from "./components/InputPoem";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <PoemList />
        </Route>
        <Route path="/add">
          <InputPoem />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
