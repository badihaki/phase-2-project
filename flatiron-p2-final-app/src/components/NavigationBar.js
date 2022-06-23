import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className='nav'>
            Navigation
            <br />
            <NavLink to={"/"}>
                Home
            </NavLink>
            <NavLink to={"/challengers"}>
                Players
            </NavLink>
            <NavLink to={"/tournaments"}>
                Tournaments
            </NavLink>
            <NavLink to={"/newchallenger"}>
                New Challenger
            </NavLink>
            <NavLink to={"/newtourney"}>
                Make a New Tournament
            </NavLink>
        </div>
    )
}

export default NavBar;