import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddNewUser from './AddNewUser';
import UserList from './UserList';

class App extends Component {
  state = {
    users: [],
  };

  handleAddUser = user => {
    user.numGamesPlayed = 0;
    this.setState(currentState => ({
      users: [...currentState.users, user],
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddNewUser users={this.state.users} onAddNewUser={this.handleAddUser} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;