import { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    // fetch returns a promise
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then(response => 
      response.json())
    .then(users => this.setState({ monsters: users }))
  }



  // Never run setstate in renders because of infinite loop
  render() {
    return (
      <div className="App">
        <input 
          type='search' 
          placeholder='Search Monsters' 
          onChange={ e => this.setState({ searchField: e.target.value })} 
          />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
