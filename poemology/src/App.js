import "./styles/App.css";
import Header from "./components/Header";
import PoemPage from "./pages/PoemPage";
import PoemList from "./components/PoemList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InputPoem from "./components/InputPoem";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={PoemList} />
          <Route path="/add" component={InputPoem} />
          <Route path="/:poemId" component={PoemPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
