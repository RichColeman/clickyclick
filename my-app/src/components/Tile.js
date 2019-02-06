import React from "react";

export default (props) => {
    return (
        <div className="tile" onClick={() => props.handleTileClick(props.id)}>
            <div className="img">
            <img alt={props.player} src={props.image}/>
            </div>
            {props.char}
        </div>
    );
}