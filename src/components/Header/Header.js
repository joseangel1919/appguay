import React, {useContext} from 'react'
import {ColorContext} from '../../context/ColorContext';
import Nav from '../Nav/Nav'
import './Header.css'

function Header() {
    const colorCtx = useContext(ColorContext);
    
    console.log("**************")
    console.log(colorCtx)
    let color = colorCtx.color==="blue"?"red":"blue"
    return (
        <header className="main-header" style={{ backgroundColor: colorCtx.color }}>
        <div className="container">
            <h1 className="mh-logo">
                <img className="logo" src="http://flexbox.ninja/assets/images/logo.svg"  alt="Flexbox.ninja"/>
            </h1>
            <Nav />
          <button onClick={()=>colorCtx.changeColor(color)}>Cambia</button>
        </div>
    </header>
    )
}
export default Header