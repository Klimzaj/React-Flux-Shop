import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import SampleStore from '../stores/SampleStore';
import SampleActionCreator from '../actions/SampleActionCreators';


class MyProductContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        kupione: ''
    }
    
    this.divStyle = {
      width: '300px',
      marginLeft: '50px',
      backgroundColor: '#92a8d1'
    };
  }
  componentWillMount = () => {
      if(this.props.obj.isBought)
      {
          this.setState({kupione: 'Bought'})
      }
  }

  render() {
    return (
      <div style={this.divStyle}>
      <li>
        <h3>{this.props.obj.name}</h3>
        
        <h4>{this.props.obj.price}</h4>
        <h4>{this.state.kupione}</h4>
        
        <p>{this.props.obj.id_u}</p>
        
        <p>{this.props.obj.description}</p>
        </li>
      </div>
    );
  }
}


export default MyProductContent;
