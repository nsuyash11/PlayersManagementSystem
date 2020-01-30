import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import "./styles.css";

import { SearchBox } from "./components/searchbox/searchbox.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: "Batman",
          id: 1
        },
        {
          name: "Spiderman",
          id: 2
        },
        {
          name: "Tiger",
          id: 3
        },
        {
          name: "Lion",
          id: 4
        }
      ],
      searchField: ""
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value }, () => {
      console.log("SearchField State now - " + this.state.searchField);
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(response => response.json())
      .then(playersArr => this.setState({ players: playersArr }));
  }

  render() {
    const { players, searchField } = this.state;

    const filteredPlayers = players.filter(player =>
      player.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Players Management System</h1>

        <SearchBox
          placeholderProp="Search players..."
          handleChange={this.handleChange}
        />

        <h3 className="searchTitle">{this.state.searchField}</h3>

        <CardList name="Suyashprop1" age="21prop2" players={filteredPlayers} />

        <h2>I am Reactive Fluid... {this.state.str}</h2>

        <button
          onClick={() => {
            if (this.state.str === "Awesome") {
              this.setState({ str: "It's magic" });
            } else {
              this.setState({ str: "Awesome" });
            }
          }}
        >
          Click to React !
        </button>
      </div>
    );
  }
}

export default App;
