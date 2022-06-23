import React, { useState, useEffect } from 'react';
import '../App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './NavigationBar';
import Home from './Home';
import TourneyList from './TournamentList';
import PlayersList from './PlayerList';
import NewChallengerForm from './NewChallengerForm';
import NewTournamentForm from './NewTourneyForm';

function App() {

  const [players, setPlayers] = useState([]);
  const [tournaments, setTournaments] = useState([]);

  useEffect( ()=> {
    fetch(`${api}/players`).then( r=>r.json()).then((data)=>{
      setPlayers(data);
    })
  }, [])

  useEffect( ()=> {
    fetch(`${api}/tournaments`).then(r=>r.json()).then( (data)=>{
      setTournaments(data);
    })
  }, [])

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
      const newTourneyList = [...tournaments, data];
      setTournaments(newTourneyList);
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
      const newPlayersList = [...players, data];
      setPlayers(newPlayersList);
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
          <PlayersList players={players} />
        </Route>
      <Route exact path={"/tournaments"}>
          <TourneyList tournaments={tournaments} />
        </Route>
        <Route exact path={"/"}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
