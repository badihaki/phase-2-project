import React from "react";

function Challenger({ player }){

    const games = player.games.filter( (game)=>{
        return game.selected === true;
    }).map( (game) => {
        return (
            <div key={game.title} >
                {game.title}
            </div>
        )
    })
    
    return(
        <div>
            {player.name}
            <div>
                Age: {player.age}
            </div>
            <div>
                Currently Active Games:
                {games}
            </div>
        </div>
    )
}

export default Challenger;