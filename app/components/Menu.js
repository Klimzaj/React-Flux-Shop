import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem } from 'material-ui/List';
import { Container } from 'flux/utils'
import SampleStore from '../stores/SampleStore'
import SampleActionCreator from '../actions/SampleActionCreators';

class _Menu extends Component {
  static getStores() {
    return [SampleStore];
  }
  static calculateState() {
    return {
      sample: SampleStore.getState()
    };
  }
  constructor(props){
   super(props)
    SampleActionCreator.action001();
  }
  render() {
    console.log(this.state.sample)
    return (
      <List style={{width: '15%'}}>
        <ListSubheader>Menu</ListSubheader>
        
        <ListItem component={Link} to={"/myinfo"}>My info</ListItem>
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

const Menu = Container.create(_Menu);
export default Menu;
