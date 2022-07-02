import React from 'react'
import {PATH} from "../h5/Routes";
import s from "*.module.css";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            // add NavLinks
            <NavLink to={PATH.PRE_JUNIOR} className={s.link} >pre-junior</NavLink>
        </div>
    )
}

export default Header
