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

  const api = "http://localhost:3000";
  
  function postNewTournament(tournament){
    // console.log(tournament)
    fetch(`${api}/tournaments`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tournament)
    }).then( (r) => r.json() ).then( (data)=> {
      console.log(data);
      // set tournaments here
    })
  }
  function postNewChallenger(player){
    fetch(`${api}/players`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(player)
    }).then( (r) => r.json()).then( (data) => {
      console.log(data);
      // set players here
    })
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path={"/newtourney"}>
          <NewTournamentForm newTournament={postNewTournament} />
        </Route>
      <Route exact path={"/newchallenger"}>
          <NewChallengerForm newChallenger={postNewChallenger} />
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
