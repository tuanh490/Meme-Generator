import React from "react";
import trollFace from "../assets/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img src={trollFace} alt="" className="troll-face" />
            <h3 className="project-name">Meme Generator</h3>
            <span className="course">React Course - Project 3</span>
        </header>
    )
}