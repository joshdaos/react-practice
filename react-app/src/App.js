import { Component } from 'react';
// imports
import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // fetch returns a promise
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then(response => 
      response.json())
    .then(users => this.setState({ monsters: users }))
  }


  // arrow functions will automatically bind to the context
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    // same as ^
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
          <SearchBox 
          placeholder='Search Monsters' 
          handleChange={this.handleChange}
          />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
