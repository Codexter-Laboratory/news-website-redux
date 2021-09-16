import React from 'react'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className='navContainer'>
            <a href='/'>Home</a>
            <a href='/history' style={{marginLeft: '50%'}}>History</a>
        </div>
    );
}
export default Navbar
