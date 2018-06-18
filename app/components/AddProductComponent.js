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

class _AddProductComponent extends Component {
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
                name: '',
                price: 0,
                description: '',
                productCategory: 0,
                quantity: 0,
                u_id: 1,
            }

            console.log(this.state.productCategory)

      }

    handleChange = (e) => {
        if(e.target.id === 'name') {
            this.setState({
                name: e.target.value
            })
            
        }else if(e.target.id === 'price'){
            this.setState({
                price: e.target.value
            })
        }else if(e.target.id === 'quantity'){
            this.setState({
                quantity: e.target.value
            })
        }else if(e.target.id === 'description'){
            this.setState({
                description: e.target.value
            })
        }else if(e.target.id === 'productCategory'){
            this.setState({
                productCategory: e.target.value
            })
        }

    }

    handleClick = (e) => {
        console.log(this.state.name)
        console.log(this.state.price)
        console.log(this.state.quantity)
        console.log(this.state.description)
        console.log(this.state.productCategory)

        axios.post('http://localhost:3001/api/product',{
            name: this.state.name,
            price: this.state.price,
            quantity: this.state.quantity,
            description: this.state.description,
            productCategory: this.state.productCategory,
            id_u: 1,
            })//id_u change later to be a value from a cookie or sth?
            .then(function (response) {

            }).catch(function (error) {
                console.log(error);
        });


    }

    createProductCategory = (productCategory) => {
        return <option name={productCategory.pcid} value={productCategory.pcid}>{productCategory.name}</option>
    }
    allProductCategory = (productCategory) => productCategory.map(this.createProductCategory);

    render() {
        return (

            <div id = "AddProductComponent">
            <Navi title="Orders"/>
            <div style={{display:"flex"}}>
            <Menu/>
            <div id = "Form" style={{display:"flex", flexDirection: "column"}}>
                <TextField
                    id="name"
                    label="Name"
                    type="text"
                    onBlur={this.handleChange}
                    margin="normal"
                />
                <TextField
                    id="price"
                    label="Price"
                    type="number"
                    onBlur={this.handleChange}
                    margin="normal"
                />

                <TextField
                    id="quantity"
                    label="Amount"
                    type="number"
                    onBlur={this.handleChange}
                    margin="normal"
                />

                <TextField
                    id="description"
                    label="Item description"
                    type="text"
                    onBlur={this.handleChange}
                    margin="normal"
                />

                <select
                onChange= {this.handleChange}
                name = "productCategory"
                id = "productCategory">

                    {this.allProductCategory(this.state.sample.productCategory)}

                </select>
                <Button onClick={this.handleClick}>Create an new offert</Button>
            </div>
            </div>
            </div>
        )
    }
}

const AddProductComponent = Container.create(_AddProductComponent);
export default AddProductComponent