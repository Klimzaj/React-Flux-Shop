import React, { Component } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import SampleStore from '../stores/SampleStore';
import SampleActionCreator from '../actions/SampleActionCreators';


class RegistrationContent extends Component {
constructor(props) {
    super(props);
    this.state = {
      login: '',
      goodLog: false,
      password: ''
    };
    this.updateLogin = this.updateLogin.bind(this);
    this.updatePassword = this.updatePassword.bind(this);

    this.aj = this.aj.bind(this);

    this.toHex = this.toHex.bind(this);

    this.isLogin = this.isLogin.bind(this);

    this.divStyle = {
      marginLeft: '50px'
    };
  }

  updateLogin = (e) =>  {
    const newLogin = document.getElementById('login-input').value; 
    this.setState({ login: e.target.value });
    this.isLogin(newLogin)
  }

  isLogin = (url) => {
    axios.get(`http://localhost:3000/api/islogin/${url}`)
    .then(response => {
      let result = response.data.data;
      if(result.users.length == 0)
      {
        this.setState({goodLog: true});
      }
      else this.setState({goodLog: false});
    })
    .catch(function (error) {
      console.log(error);
      this.setState({goodLog: false});
    })
  }
  
  updatePassword = (e) =>  {
    if (this.state.goodLog === true)
    {
      if(e.target.value.length >= 5)
      {
        this.setState({ password: e.target.value });
      }
      else{
        console.log('za krotkie');
        e.target.value = '';
      }
    }
    else console.log("Login istnieje!")
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
    //rejestracja!
    if(this.state.login !== '' && this.state.password !== '')
    {
      const obj = {
        login: this.state.login,
        password: this.toHex(this.state.password)
      }
      SampleActionCreator.action003(obj);
      alert('Add user!')
    }
    else {
      console.log("nie dodal!");
    }
  }

  render() {
    return (
      <div style={this.divStyle}>
        <h1>Zarejestruj!</h1>
        <TextField
          id="login-input"
          label="Login"
          type="text"
          margin="normal"
          // value = {this.state.login}
          // onChange={this.aj}
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
        <p> Masz konto? <a href={'/log'}>Zaloguj!</a></p>
      </div>
    );
  }
}


export default RegistrationContent;
