import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import SampleStore from '../stores/SampleStore';
import SampleActionCreator from '../actions/SampleActionCreators';


class MyInfoContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      address: '',
      phone: '',
      email: ''
    };
    
    this.divStyle = {
      marginLeft: '50px',
      float: 'left'
    };
  }
  updateInfo = (e) => {
    if(e.target.id === 'name' && e.target.value !== '') {
        this.setState({ name: e.target.value})
    }
    else if(e.target.id === 'surname' && e.target.value !== ''){
        this.setState({surname: e.target.value})
    }
    else if(e.target.id === 'address' && e.target.value !== ''){
        this.setState({address: e.target.value})
    }
    else if(e.target.id === 'phone' && e.target.value !== ''){
        this.setState({phone: e.target.value})
    }
    else if(e.target.id === 'email' && e.target.value !== ''){
        this.setState({email: e.target.value})
    }
  }

  componentWillMount = () =>
  {
      this.setState({name: this.props.obj.name})
      this.setState({surname: this.props.obj.surname})
      this.setState({address: this.props.obj.address})
      this.setState({phone: this.props.obj.phone})
      this.setState({email: this.props.obj.email})
  }
  saveInfo = () => {
    axios.post('http://localhost:3000/api/editMyInfo', {
        id: this.props.id,
        name: this.state.name,
        surname: this.state.surname,
        address: this.state.address,
        phone: this.state.phone,
        email: this.state.email
    })
    .then(function (response) {
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  delUser = () => {
    axios.post(`http://localhost:3000/api/deleteUser`,{
      id: this.props.id
    })
    .then(function (response) {
        window.location= '/'
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div style={this.divStyle}>
        <TextField
          id="name"
          label="name"
          defaultValue= {this.state.name}
          type="text"
          margin="normal"
          onBlur={this.updateInfo}
        />
        <br/>
        <TextField
          id="surname"
          label="surname"
          defaultValue= {this.state.surname}
          type="text"
          margin="normal"
          onBlur={this.updateInfo}
        />
        <br/>
        <TextField
          id="address"
          label="address"
          defaultValue= {this.state.address}
          type="text"
          margin="normal"
          onBlur={this.updateInfo}
        />
        <br/>
        <TextField
          id="phone"
          label="phone"
          defaultValue= {this.state.phone}
          type="text"
          margin="normal"
          onBlur={this.updateInfo}
        />
        <br/>
        <TextField
          id="email"
          label="email"
          defaultValue= {this.state.email}
          type="text"
          margin="normal"
          onBlur={this.updateInfo}
        />
        <br/>
        <Button onClick={this.saveInfo}>Save!</Button>
        <br/>
        <Button onClick={this.delUser}>Delete user!</Button>
      </div>
    );
  }
}


export default MyInfoContent;
