import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cars from "./Cars/Cars";
import HeaderOne from "./HeaderOne/HeaderOne";
import HeaderTwo from "./HeaderTwo/HeaderTwo";
import Home from "./Home/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <HeaderOne />
        <HeaderTwo />
        <Switch>
          <Route path="/rentcar">
            <Cars />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
