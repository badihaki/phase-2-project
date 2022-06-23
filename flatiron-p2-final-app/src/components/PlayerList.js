import React from "react";
import Challenger from "./Challenger";

function PlayersList({ players }){
    // map through the 'players' data to create 'Challenger' conponents for each player
    const challengerCards = players.map( (player) =>{
        return (
            <Challenger key={player.id} player={player} />
        )
    })
    return(
        <div>
            Players
            {challengerCards}
        </div>
    )
}

export default PlayersList;