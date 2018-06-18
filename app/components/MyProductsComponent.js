import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Button from 'material-ui/Button';
import SampleActionCreator from '../actions/SampleActionCreators';
import TextField from 'material-ui/TextField'
import Navi from './Navi';
import Menu from './Menu';
import axios from 'axios'
import { Container } from 'flux/utils'
import SampleStore from '../stores/SampleStore'
import MyProductContent from './MyProductContent'

class _MyProductsComponent extends Component {
    static getStores() {
        return [SampleStore];
      }
      static calculateState() {
        return {
          sample: SampleStore.getState()
        };
      }

      constructor(props) {
          super(props)
            SampleActionCreator.action008(this.props.match.params.id)
      }
      createProduct = (p) => {
        //   console.log(p)
        return <MyProductContent obj={p} id={this.props.match.params.id} />
    }

    showProducts = (p) => p.map(this.createProduct);
    render() {
        return (
            <div>
            <Navi title="Orders"/>
            <div style={{display:"flex"}}>
            <Menu id={this.props.match.params.id}/>
            <ul>
            {this.showProducts(this.state.sample.products)}
            </ul>
            </div>
            </div>
        )
    }
}

const MyProductsComponent = Container.create(_MyProductsComponent);
export default MyProductsComponent