import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import firebase from '../models/db';

import './LoginView.css';

export default class LoginView extends Component {
  constructor(props) {
    super();
    this.set_auth = props.set_auth;
    this.state = {
      email: '',
      password: '',
      error_message: '',
    };
    this.handle_change = this.handle_change.bind(this);
    this.submit = this.submit.bind(this);
  }

  handle_change(name) {
    return (event) => {
      this.setState({ [name]: event.target.value });
    };
  }

  submit() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.set_auth();
        this.setState({ error_message: '' });
      })
      .catch((error) => {
        this.setState({ error_message: error.message });
      });
  }

  render() {
    return (
      <Card className="login-view">
        <CardContent>
          <Typography component="h4" variant="h4">
                        Login
          </Typography>
          <form className="login-form">
            <TextField id="email-input" label="Email" value={this.state.email} onChange={this.handle_change('email')} />
            <br />
            <TextField
              id="password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.handle_change('password')}
            />
            <br />
            <Button variant="contained" color="primary" onClick={this.submit} style={{ marginTop: '10px' }}>Submit</Button>
            <Typography style={{ color: 'red' }}>{this.state.error_message}</Typography>
          </form>
        </CardContent>
      </Card>

    );
  }
}
