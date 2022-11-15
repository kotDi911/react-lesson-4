import React from "react";
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return(
        <ul>
            <li className="nav__li"><NavLink className="nav__link" to="/">Main</NavLink></li>
            <li className="nav__li"><NavLink className="nav__link" to="/task1">Task1</NavLink></li>
            <li className="nav__li"><NavLink className="nav__link" to="/task2">Task2</NavLink></li>
            <li className="nav__li"><NavLink className="nav__link" to="/task3">Task3</NavLink></li>
        </ul>
    )
};