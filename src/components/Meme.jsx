import React from "react";

export default function Meme() {
    return (
        <div className="meme-form">
            <form action="">
                <div className="text-input">
                    <input type="text" placeholder="Top Text" className="top-text" />
                    <input type="text" placeholder="Bottom Text" className="bottom-text" />
                </div>
                <button className="get-image-btn">Get a new meme image</button>
            </form>
        </div>
    )
}