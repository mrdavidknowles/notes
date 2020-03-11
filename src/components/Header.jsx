import React from "react";
import logoImage from "../images/logo.png"

function Header() {
    return (
        <header>
            <img src={logoImage} alt="logo" /><h1>Notes</h1>
            
        </header>
    )
}

export default Header;


