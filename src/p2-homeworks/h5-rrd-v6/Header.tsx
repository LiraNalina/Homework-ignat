import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./Header.module.css"

function Header() {
    return (
        <div>
            // add NavLinks
            <NavLink to={PATH.PRE_JUNIOR} className={s.link}> pre-junior </NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link}> junior </NavLink>
            <NavLink to={PATH.TRAINEE} className={s.link}> trainee </NavLink>
        </div>
    )
}

export default Header