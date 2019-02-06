import React, {
  Component
} from 'react';
import './App.css';
import Header from "./components/Header";
import Tile from "./components/Tile"

function resetChecked(arr) {
  arr.forEach(player => player.checked = false )
};
class App extends Component {
  state = {
    currentScore: 0,
    topscore: 0,
    message: "Click a 76er to start!",
    tiles: [
      { id: 0, player: "Amir Johnson", image: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101161.png", checked: false },
      { id: 1, player: "Ben Simmons", image: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627732.png", checked: false },
      { id: 2, player: "Jimmy Butler", image: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202710.png", checked: false },
      { id: 3, player: "JJ Redick", image: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200755.png", checked: false },
      { id: 4, player: "Joel Embiid", image: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203954.png", checked: false },
      { id: 5, player: "Jonah Bolden", image: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628413.png", checked: false },
      { id: 6, player: "Markelle Fultz", image: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628365.png", checked: false },
      { id: 7, player: "Landry Shamet", image: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1629013.png", checked: false },
      { id: 8, player: "Mike Muscala", image: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203488.png", checked: false },
      { id: 9, player: "Shake Milton", image: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1629003.png", checked: false },
      { id: 10, player: "TJ McConnell", image: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/204456.png", checked: false },
      { id: 11, player: "Wilson Chandler", image: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201163.png", checked: false }
    ]
  };



  handleTileClick = (id) => {
    this.state.tiles.forEach((tile) => {
      if (tile.id === id) {
        if (tile.checked === true) {
          this.setState({ message: "Wrong! Try again!" })
          if (this.state.currentScore > this.state.topscore) {
            this.setState({ topscore: this.state.currentScore });
            this.setState({ currentScore: 0 });
            resetChecked(this.state.tiles)

          } else {
            this.setState({ currentScore: 0 });
          }
        } else {
          tile.checked = true;
          this.setState({ currentScore: this.state.currentScore + 1 });
          this.setState({ message: "Correct!" });
          let tiles = this.state.tiles.slice(0);
        tiles.sort(() => Math.random() - 0.5);
        this.setState({tiles})

        }
        
        }
    })
    
    }

  render() {
    return (<div>
      <Header currentScore={this.state.currentScore}
              topscore={this.state.topscore}
              message={this.state.message} />
      <div className="game-board">
        {this.state.tiles.map((tile, i) => <Tile
          key={i}
          id={tile.id}
          handleTileClick={this.handleTileClick}
          char={tile.player}
          image={tile.image}
         />)} </div>
      </div>
    );
  }
}

export default App;