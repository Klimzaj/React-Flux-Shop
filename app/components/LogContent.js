import React, { Component } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import SampleStore from '../stores/SampleStore';
import SampleActionCreator from '../actions/SampleActionCreators';


class LogContent extends Component {
constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
    this.updateLogin = this.updateLogin.bind(this);
    this.updatePassword = this.updatePassword.bind(this);

    this.aj = this.aj.bind(this);

    this.toHex = this.toHex.bind(this);
    
    this.divStyle = {
      marginLeft: '50px'
    };
  }

  updateLogin = (e) =>  {
    const newLogin = document.getElementById('login-input').value; 
    this.setState({ login: e.target.value });
  }
  
  updatePassword = (e) =>  {
    if(e.target.value.length >= 5)
    {
      this.setState({ password: e.target.value });
    }
    else{
      console.log('za krotkie');
      e.target.value = '';
    }
  }
  toHex = (str) => {
    const arr = [];
    for (let i = 0, l = str.length; i < l; i++) {
      const hex = Number(str.charCodeAt(i)).toString(16);
      arr.push(hex);
    }
    return arr.join('');
  }
  aj() {
    //logowanie!
    if(this.state.login !== '' && this.state.password !== '')
    {
      const obj = {
        login: this.state.login,
        password: this.toHex(this.state.password)
      }
      SampleActionCreator.action002(obj);
    }
    else {
      console.log("nie zalogowano!");
    }
  }

  render() {
    return (
      <div style={this.divStyle}>
        <h1>Zaloguj!</h1>
        <TextField
          id="login-input"
          label="Login"
          type="text"
          margin="normal"
          onBlur={this.updateLogin}
        />
        <br/>
        <TextField
          id="password-input"
          label="Password"
          type="password"
          margin="normal"
          onBlur={this.updatePassword}
        />
        <br/>
        <Button color="secondary" onClick={this.aj}>
          Add me!
        </Button>
        <p>Nie masz konta?<a href={'/reg'}>Zarejestruj!</a></p>
      </div>
    );
  }
}


export default LogContent;
