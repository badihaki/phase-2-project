import React, { useState } from "react";

function NewChallengerForm({ newChallenger }){

    const [challenger, setNewChallenger] = useState({
      "name": "",
      "age": "",
      "games": [{
        "title": "Guilty Gear",
        "selected": false
      },
      {
        "title": "Street Fighter",
        "selected": false
      },
      {
        "title": "Tekken",
        "selected": false
      },
      {
        "title": "Smash Ultimate",
        "selected": false
      }]
    })

    const checkboxes = challenger.games.map( (game) => {
        return(
            <div key={game.title}>
                <label htmlFor={game.title}>{game.title}</label>
                <input type={"checkbox"} name={game.title} id={game.title}  checked={game.selected} onChange={handleGamesCheckbox} />
            </div>
        )
    })
    
    function handleSubmit(event){
        event.preventDefault();
        newChallenger(challenger);
        setNewChallenger({
            "name": "",
            "age": "",
            "games": [{
                "title": "Guilty Gear",
                "selected": false
              },
              {
                "title": "Street Fighter",
                "selected": false
              },
              {
                "title": "Tekken",
                "selected": false
              },
              {
                "title": "Smash Ultimate",
                "selected": false
              }]
        })
    }
    
    function handleChangeForm(event){
        const key = event.target.name;
        const value = event.target.value;
        const newPlayer = {...challenger};
        newPlayer[key] = value;
        setNewChallenger(newPlayer);
    }
    
        function handleGamesCheckbox(event){
            const gameTitle = event.target.name;
            const overwritingPlayer = {...challenger}
            const gameToOverwrite = overwritingPlayer.games.find( (game)=> {
                return game.title === gameTitle;
            })
            gameToOverwrite.selected=!gameToOverwrite.selected;
            setNewChallenger(overwritingPlayer);
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
                    {checkboxes}
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