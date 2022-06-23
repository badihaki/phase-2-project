import React from "react";
import TourneyTicket from "./TourneyTicket";

function TourneyList( { tournaments } ){
    const tourneyTickets = tournaments.map( (tourney) =>{
        return <TourneyTicket key={tourney.id} tournament={tourney} />
    })
    return(
        <div>
            Tournaments
            {tourneyTickets}
        </div>
    )
}

export default TourneyList;