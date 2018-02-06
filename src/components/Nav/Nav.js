import React from "react";
import "./Nav.css";

const Nav = props =>
    <nav className="navbar navbar-inverse">
    <ul className="nav navbar-nav">
        <li className="navbar-brand">Clicky Game</li>
        <li className="instructions">Click an image to begin!</li>
        <li className="scoreDisplay">Score: {props.currentScore} | Top Score: {props.topScore}</li>
    </ul>
    </nav>

export default Nav;