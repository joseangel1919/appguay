import React, { Component, useContext } from 'react'
import { ColorContext } from '../../context/ColorContext';

import Nav from '../Nav/Nav'
import './Header.css'

function Header() {
    const ctx = useContext(ColorContext);

    return (
        <header className="main-header" style={{ backgroundColor: ctx.colors.blue }}>
                <div className="container">
                    <h1 className="mh-logo">
                        <img className="logo" src="http://flexbox.ninja/assets/images/logo.svg"  alt="Flexbox.ninja"/>
		            </h1>
                    <Nav />
                </div>
            </header>
            
    
    )
}

export default Header



