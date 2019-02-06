import React from "react";

export default (props) => {
    return (<header className="inner-container">
        <div>76ers Memory Game</div>
        <div>{props.message}</div>
        <div>Current score:{props.currentScore}</div>
        <div>Top score:{props.topscore}</div>

    </header>)
}