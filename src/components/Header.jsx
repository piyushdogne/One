import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return <>
        <nav>
            <h1>
                TechStar
            </h1>
            <main>
                <Link to={"/"}>Home</Link>
                <Link to={"/contacts"}>Contacts</Link>
                <Link to={"/#about"}>About</Link>
                <Link to={"/#brands"}>Brands</Link>
                <Link to={"/services"}>Services</Link>

            </main>
        </nav>
    </>;

};

export default Header;
