import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./Header.module.css"

function Header() {
    return (
        <div>
            {/*// add NavLinks*/}
            <div className={s.hover}>Up</div>
            <NavLink to={PATH.PRE_JUNIOR} className={s.holder}  > pre-junior </NavLink>
            <NavLink to={PATH.JUNIOR} className={s.holder}  > junior </NavLink>
            <NavLink to={PATH.TRAINEE} className={s.holder} > trainee </NavLink>
            <div className={s.block}>Text</div>
        </div>
    )
}

export default Header
