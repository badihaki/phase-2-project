import React from "react";

function TourneyTicket({ tournament }){
    return (
        <div>
            <h1>{tournament.name}</h1>
            <h2>{tournament.organizer}</h2>
            <h3>{tournament.email}</h3>
            {/*<h3>{tournament.date.toDateString()}</h3>*/}
        </div>
    )
}

export default TourneyTicket;