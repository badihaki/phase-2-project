import React, { useState } from "react";

function NewChallengerForm({ newChallenger }){

    const [challenger, setNewChallenger] = useState({
      "name": "",
      "age": "",
      "games": []
    })

    function handleSubmit(event){
        event.preventDefault();
        newChallenger(challenger);
        event.target.reset();
        debugger;
        window.location.reload(true);
    }

    function handleChangeForm(event){
        const key = event.target.name;
        const value = event.target.value;
        const newPlayer = {...challenger};
        newPlayer[key] = value;
        setNewChallenger(newPlayer);
    }

    function handleAddRemoveGames(event){
        if(event.target.checked){
            addGame(event.target.name);
        }
        else if(!event.target.checked){
            removeGame(event.target.name);
        }
    }
    function addGame(game){
        const temporaryPlayerObject = {...challenger};
        temporaryPlayerObject.games.push(game);
        setNewChallenger(temporaryPlayerObject);
        debugger
    }
    function removeGame(gameName){
        const games = challenger.games.filter( (game)=>{
            return gameName !== game;
        })
        const temporaryPlayerObject = {...challenger, games};
        setNewChallenger(temporaryPlayerObject);
        // debugger
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">
                    New Challenger
                </label>
                <input type={"text"} id={"name"} name={"name"} placeholder={"New Challenger Name"} value={challenger.name} onChange={handleChangeForm} required />
            </div>
            <div>
                <label htmlFor="age">
                    Challenger Age
                </label>
                <input type={"number"} id={"age"} name={"age"} placeholder={"Challenger Age"} value={challenger.age} min={18} onChange={handleChangeForm} required />
            </div>
            <div>
                <label htmlFor="games">
                    Games
                </label>
                <div>
                    <label htmlFor="Street Fighter">Guilty Gear</label>
                    <input type={"checkbox"} name={"Guilty Gear"} id={"Guilty Gear"} onChange={handleAddRemoveGames} />
                    <br />
                    <label htmlFor="Street Fighter">Street Fighter</label>
                    <input type={"checkbox"} name={"Street Fighter"} id={"Street Fighter"}  onChange={handleAddRemoveGames} />
                    <br />
                    <label htmlFor="Tekken">Tekken</label>
                    <input type={"checkbox"} name={"Tekken"} id={"Tekken"}  onChange={handleAddRemoveGames} />
                    <br />
                    <label htmlFor="Smash Ultimate">Smash Ultimate</label>
                    <input type={"checkbox"} name={"Smash Ultimate"} id={"Smash Ultimate"}  onChange={handleAddRemoveGames} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </div>
        </form>
    )
}

export default NewChallengerForm;