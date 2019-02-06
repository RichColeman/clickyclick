import React from "react";

export default (props) => {
    return (
        <div className="tile" onClick={props.handleTileClick}>
        {props.char}
        </div>
    );
}