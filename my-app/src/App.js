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
    tiles: ["a","b","c","d","e","f"],
  }

  handleTileClick = () => {
    console.log('ive been clicked!');
    
  }
  render() {
    return (<div>
      <Header currentScore={this.state.currentScore}
              topscore={this.state.topscore}
              message={this.state.message} />
      <div className="game-board">{this.state.tiles.map((tile, i) => <Tile key={i} handleTileClick={this.handleTileClick} char={tile} />)} </div>
      </div>
    );
  }
}

export default App;