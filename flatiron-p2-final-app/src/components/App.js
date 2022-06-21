import React from 'react';
import '../App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './NavigationBar';
import Home from './Home';
import TourneyList from './TournamentList';
import PlayersList from './PlayerList';
import NewChallengerForm from './NewChallengerForm';
import NewTournamentForm from './NewTourneyForm';

function App() {
  return (
    <div className="App">
      {/* nav bar and nav links to all resources */}
      <NavBar />
      <Switch>
      <Route exact path={"/newtourney"}>
          <NewTournamentForm />
        </Route>
      <Route exact path={"/newchallenger"}>
          <NewChallengerForm />
        </Route>
      <Route exact path={"/challengers"}>
          <PlayersList />
        </Route>
      <Route exact path={"/tournaments"}>
          <TourneyList />
        </Route>
        <Route exact path={"/"}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
