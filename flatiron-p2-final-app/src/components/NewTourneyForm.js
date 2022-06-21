import React from "react";

function NewTournamentForm(){
    function handleSubmitForm(event){
        event.preventDefault();
    }
    return(
        <div className="tourneyForm">
            New Tournament
            <form onSubmit={handleSubmitForm} >
                <div>
                    <input type={"text"} name="name" placeholder="Tournament Name" required />
                    <input type={"text"} name="organizerName" placeholder="Tournament Organizer" required />
                    <input type={"email"} name="email" placeholder="Tournament Organizer Email" required />
                </div>
                <div>
                    Date of Tournament
                    <input type={"date"} name="date" min={"2022-07-01"} max={"2157-12-12"} required />
                </div>
                <div>
                    <input type="radio" name="game" value={"Street Fighter"} />Street Fighter
                    <br />
                    <input type="radio" name="game" value={"Guilty Gear"} />Guilty Gear
                    <br />
                    <input type="radio" name="game" value={"Tekken"} />Tekken
                    <br />
                    <input type="radio" name="game" value={"Smash Ultimate"} />Super Smash Bros Ultimate
                </div>
                <div>
                    Winning Pot
                    <div>
                    <input type="number" name="pot" placeholder={0} />
                    </div>
                </div>
                <div>
                    <button type="reset">Reset Form</button>
                    <button type="submit">Submit Form</button>
                </div>
            </form>
        </div>
    )
}

export default NewTournamentForm;