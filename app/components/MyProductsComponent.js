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
            // SampleActionCreator.action005()//product_category getter
            this.state = {
                
            }
      }

    // handleChange = (e) => {
    //     if(e.target.id === 'name') {
    //         this.setState({
    //             name: e.target.value
    //         })
            
    //     }else if(e.target.id === 'price'){
    //         this.setState({
    //             price: e.target.value
    //         })
    //     }else if(e.target.id === 'quantity'){
    //         this.setState({
    //             quantity: e.target.value
    //         })
    //     }else if(e.target.id === 'description'){
    //         this.setState({
    //             description: e.target.value
    //         })
    //     }else if(e.target.id === 'productCategory'){
    //         this.setState({
    //             productCategory: e.target.value
    //         })
    //     }

    // }

    // handleClick = (e) => {
    //     console.log(this.state.name)
    //     console.log(this.state.price)
    //     console.log(this.state.quantity)
    //     console.log(this.state.description)
    //     console.log(this.state.productCategory)

    //     axios.post('http://localhost:3001/api/product',{
    //         name: this.state.name,
    //         price: this.state.price,
    //         quantity: this.state.quantity,
    //         description: this.state.description,
    //         productCategory: this.state.productCategory,
    //         id_u: 1,
    //         })//id_u change later to be a value from a cookie or sth?
    //         .then(function (response) {

    //         }).catch(function (error) {
    //             console.log(error);
    //     });


    // }

    // createProductCategory = (productCategory) => {
    //     return <option name={productCategory.pcid} value={productCategory.pcid}>{productCategory.name}</option>
    // }
    // allProductCategory = (productCategory) => productCategory.map(this.createProductCategory);

    render() {
        return (
            <div>
            <Navi title="Orders"/>
            <div style={{display:"flex"}}>
            <Menu id={this.props.match.params.id}/>
            </div>
            </div>
        )
    }
}

const MyProductsComponent = Container.create(_MyProductsComponent);
export default MyProductsComponent