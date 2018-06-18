import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import SampleStore from '../stores/SampleStore';
import SampleActionCreator from '../actions/SampleActionCreators';


class ProductContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_u: '',
      id_pc: '',
      name: '',
      price: '',
      description: ''
    };
    
    this.divStyle = {
      width: '300px',
      marginLeft: '50px',
      backgroundColor: '#92a8d1'
    };
  }
  buyPro = () => {
    axios.post('http://localhost:3000/api/buyProduct', {
        p_id: this.props.obj.pid,
        u_id: this.props.id
    })
    .then(function (response) {
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  delPro = () => {
    axios.post(`http://localhost:3000/api/deleteProduct`,{
      p_id: this.props.obj.pid
    })
    .then(function (response) {
    })
    .catch(function (error) {
      console.log(error);
    });      
  }
  componentDidMount = () =>
  {
      if(this.props.id == this.props.obj.id_u)
      {
          document.getElementById(`kup${this.props.obj.name}`).style.visibility = "hidden"
          document.getElementById(`del${this.props.obj.name}`).style.visibility = "visible"
      }
      else{
        document.getElementById(`kup${this.props.obj.name}`).style.visibility = "visible"
        document.getElementById(`del${this.props.obj.name}`).style.visibility = "hidden"
      }
  }

  render() {
    return (
      <div style={this.divStyle}>
      <li>
        <h3>{this.props.obj.name}</h3>
        
        <h4>{this.props.obj.price}</h4>
        
        <p>{this.props.obj.id_u}</p>
        
        <p>{this.props.obj.description}</p>
        <Button id={`kup${this.props.obj.name}`} onClick={this.buyPro} >Buy</Button>
        <Button id={`del${this.props.obj.name}`} onClick={this.delPro} >Delete</Button>
        </li>
      </div>
    );
  }
}


export default ProductContent;
