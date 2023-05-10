import React from "react";
import trollFace from "../assets/troll-face.png"

export default function Header() {
    return (
        <header>
            <section>
                <img src={trollFace} alt="" />
                <h3>MemeGenerator</h3>
            </section>
            <span>React Course - Project 3</span>
        </header>
    )
}