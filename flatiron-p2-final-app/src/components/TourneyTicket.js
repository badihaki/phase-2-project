import React from "react";

function TourneyTicket({ tournament }){
    return (
        <div>
            <h1>{tournament.name}</h1>
            <h4>Organizer</h4>
            <h2>{tournament.organizer}</h2>
            <h4>Organizer Email</h4>
            <h3>{tournament.email}</h3>
            {/*<h3>{tournament.date.toDateString()}</h3>*/}
        </div>
    )
}

export default TourneyTicket;