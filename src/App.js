import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import LoginView from './views/LoginView';
import user, { auth_change_listener } from './controllers/User';
import Map from './components/Map'
class App extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.set_auth = this.set_auth.bind(this);
    auth_change_listener.push(this.set_auth);
  }

  set_auth() {
    this.forceUpdate();
  }

  render() {
    if (!user()) {
      return (
        <LoginView set_auth={this.set_auth} />
      );
    }
    return (
      <div className="App">
        <Map></Map>
      </div>
    );
  }
}

export default App;
