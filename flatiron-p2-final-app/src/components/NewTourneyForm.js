import React, {useState} from "react";

function NewTournamentForm({ newTournament }){
    const [form, setForm] = useState({
        "name": "",
        "organizer": "",
        "email": "",
        "date": "",
        "challengerIDs": [],
        "game": "",
        "pot": 0
    })
    
    function handleSubmitForm(event){
        event.preventDefault();
        newTournament(form);
    }

    function handleChangeForm(event){
        const key = event.target.name;
        const value = event.target.value;
        const newForm = {...form}
        newForm[key] = value;
        setForm(newForm);
    }
    
    return(
        <div className="tourneyForm">
            New Tournament
            <form onSubmit={handleSubmitForm} >
                <div>
                    <label htmlFor="name">
                    Tournament Name
                    </label>
                    <input type={"text"} name="name" id="name" value={form.name} onChange={handleChangeForm} placeholder="Tournament Name" required />
                    <label htmlFor="organizer">
                    Organizer Name
                    </label>
                    <input type={"text"} name="organizer" id="organizer" placeholder="Tournament Organizer" value={form.organizer} onChange={handleChangeForm} required />
                    <label htmlFor="email">
                    Organizer Email
                    </label>
                    <input type={"email"} name="email" id="email" placeholder="Organizer Email" value={form.email} onChange={handleChangeForm} required />
                </div>
                <div>
                    <label htmlFor="date">
                    Date of Tournament
                    </label>
                    <input type={"date"} name="date" min={"2022-07-01"} max={"2157-12-12"} defaultValue={form.date} onChange={handleChangeForm} required />
                </div>
                <div>
                    <input type="radio" name="game" value={"Street Fighter"} onChange={handleChangeForm} />Street Fighter
                    <br />
                    <input type="radio" name="game" value={"Guilty Gear"} onChange={handleChangeForm} />Guilty Gear
                    <br />
                    <input type="radio" name="game" value={"Tekken"} onChange={handleChangeForm} />Tekken
                    <br />
                    <input type="radio" name="game" value={"Smash Ultimate"} onChange={handleChangeForm} />Super Smash Bros Ultimate
                </div>
                <div>
                    Winning Pot
                    <div>
                    <input type="number" name="pot" value={form.pot} onChange={handleChangeForm} placeholder={0} min={0} />
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