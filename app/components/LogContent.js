import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import SampleStore from '../stores/SampleStore';
import SampleActionCreator from '../actions/SampleActionCreators';


class LogContent extends Component {
  static getStores() {
    return [SampleStore];
    
}
static calculateState() {
    return {
        sample: SampleStore.getState()
    };
}
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      id: 0
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
        this.aj(e.target.value);
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
  aj(pass) {
    //logowanie!
    console.log(this.state.login)
    console.log(pass)
    if(this.state.login !== '' && pass !== '')
    {
      const obj = {
        login: this.state.login,
        password: this.toHex(pass)
      }
      axios.get(`http://localhost:3000/api/login`,
      {params:{
        login: obj.login,
        password: obj.password
      }})
      .then(response => {
        let result = response.data.data.user[0].uid
        this.setState({id: result});
      })
      .catch(function (error) {
        console.log(error);
      })
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
        <Link to={`/myinfo/${this.state.id}`}>
              <Button>Log in!</Button>
        </Link>
        <p>Nie masz konta?<a href={'/reg'}>Zarejestruj!</a></p>
      </div>
    );
  }
}


export default LogContent;
