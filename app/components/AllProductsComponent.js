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
import ProductContent from './ProductContent'

class _AllProductsComponent extends Component {
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
            SampleActionCreator.action006()
      }
      createProduct = (p) => {
        return <ProductContent obj={p} id={this.props.match.params.id} />
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

const AllProductsComponent = Container.create(_AllProductsComponent);
export default AllProductsComponent