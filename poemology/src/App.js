import Header from "./components/Header";
import PoemPage from "./pages/PoemPage";
import PoemList from "./components/PoemList";
import InputPoem from "./components/inputPoem.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={PoemList} />{" "}
          <Route path="/add" component={InputPoem} />{" "}
          <Route path="/:poemId" component={PoemPage} />{" "}
        </Switch>{" "}
      </Router>{" "}
    </Provider>
  );
}

export default App;
