import React from "react";
import Challenger from "./Challenger";

function PlayersList({ players }){
    // map through the 'players' data to create 'Challenger' conponents for each player
    const challengerCards = players.map( (player) =>{
        return (
            <div key={player.id} >
                <Challenger player={player} />
                <br />
            </div>
        )
    })
    return(
        <div className="playerList">
            Players
            {challengerCards}
        </div>
    )
}

export default PlayersList;