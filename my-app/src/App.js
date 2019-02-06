import React, {
  Component
} from 'react';
import './App.css';
import Header from "./components/Header";
import Tile from "./components/Tile"
class App extends Component {
  state = {
    currentScore: 0,
    topscore: 0,
    message: "You right",
    tiles: [
      { id: 0, player: "Amir Johnson" },
      { id: 1, player: "Ben Simmons" },
      { id: 2, player: "Jimmy Butler" },
      { id: 3, player: "JJ Redick" },
      { id: 4, player: "Joel Embiid" },
      { id: 5, player: "Jonah Bolden" },
      { id: 6, player: "Markelle Fultz" },
      { id: 7, player: "Landry Shamet" },
      { id: 8, player: "Mike Muscala" },
      { id: 9, player: "Shake Milton" },
      { id: 10, player: "TJ McConnell" },
      { id: 11, player: "Wilson Chandler" }
    ],
  }


  handleTileClick = (id) => {
    console.log(`you clicked ${id}`);
    // check if tile has been clicked before
    this.state.tiles.forEach((tile) => {
      if (tile.id === id) {
        if (tile.checked === true) {
          console.log("you've clicked this same tile twice");
          // end game
          // reset score
        } else {
          tile.checked = true;
          // randomize tiles
          // boost current score by 1
        }
      }
    });
  }

  render() {
    return (<div>
      <Header currentScore={this.state.currentScore}
              topscore={this.state.topscore}
              message={this.state.message} />
      <div className="game-board">{this.state.tiles.map((tile, i) => <Tile
        key={i}
        id={tile.id}
        handleTileClick={this.handleTileClick}
        char={tile.player}
         />)} </div>
      </div>
    );
  }
}

export default App;