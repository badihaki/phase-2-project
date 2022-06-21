import React from 'react';
import '../App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './NavigationBar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      {/* nav bar and nav links to all resources */}
      <NavBar />
      <Switch>
        <Route>
          {/* components here */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
