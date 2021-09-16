import React from "react";
import './header.scss'
import Navbar from "../Navbar/Navbar";

export const Header = (props) => {
    return (
        <div className='headerContainer'>
            <p>{props.title}</p>
            <div className='navHome'>
                <Navbar/>
            </div>
        </div>
    )
}
