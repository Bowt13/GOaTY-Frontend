import React, { Component } from 'react';
import BattleArena from './containers/BattleArena'
import MenuBar from './containers/MenuBar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='game'>

        <BattleArena background='forest'/>
        <MenuBar/>
      </div>
    );
  }
}

export default App;
