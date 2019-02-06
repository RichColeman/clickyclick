import React from "react";

export default (props) => {
    return (
        <div className="tile" onClick={() => props.handleTileClick(props.id)} image="./sixers/Ben Simmons.png">
            {props.char}
            {props.image}
        </div>
    );
}