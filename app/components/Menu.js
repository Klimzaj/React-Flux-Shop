import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem } from 'material-ui/List';
// import OrderLoginComponent
class Menu extends Component {
  render() {
    return (
      <List style={{width: '15%'}}>
        <ListSubheader>Menu</ListSubheader>
        
        <ListItem component={Link} to={"/myoinfo"+1}>My info</ListItem>
        <ListItem component={Link} to="/myorders">My orders</ListItem>
        <ListItem component={Link} to="/myproducts">My products</ListItem>
        <ListItem component={Link} to="/addproduct">Add product</ListItem>
        <ListItem component={Link} to="/cat">Product category</ListItem>
        <ListItem component={Link} to="/products">All products</ListItem>
        <ListItem component={Link} to="/log">Logout</ListItem>
        
      </List>
    );
  }
}

export default Menu;
