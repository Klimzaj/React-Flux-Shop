import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem } from 'material-ui/List';
import { Container } from 'flux/utils'
import SampleStore from '../stores/SampleStore'
import SampleActionCreator from '../actions/SampleActionCreators';

class Menu extends Component {
  render() {
    return (
      <List style={{width: '15%'}}>
        <ListSubheader>Menu</ListSubheader>
        
        <ListItem component={Link} to={`/myinfo/${this.props.id}`}>My info</ListItem>
        <ListItem component={Link} to={`/myorders/${this.props.id}`}>My orders</ListItem>
        <ListItem component={Link} to={`/myproducts/${this.props.id}`}>My products</ListItem>
        <ListItem component={Link} to={`/addproduct/${this.props.id}`}>Add product</ListItem>
        <ListItem component={Link} to={`/products/${this.props.id}`}>All products</ListItem>
        <ListItem component={Link} to="/log">Logout</ListItem>
        
      </List>
    );
  }
}

export default Menu;
