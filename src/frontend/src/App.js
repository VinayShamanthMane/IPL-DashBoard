import { TeamPage } from "./pages/TeamPage";
import { MatchPage } from "./pages/MatchPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/teams/:teamName/matches/:year">
            <MatchPage />
          </Route>

          <Route path="/teams/:teamName">
            <TeamPage />
          </Route>
        </Switch>
      </Router>

      <img src="./Biriyani.jpg" alt="itemss" />
    </div>
  );
}

export default App;
