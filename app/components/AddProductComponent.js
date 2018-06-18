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
            SampleActionCreator.action004()
            this.state = {
                name:'',
                price:'',
                description:'',
                id_pc: 1,
                productCategory:[]
            }

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
        }else if(e.target.id === 'description'){
            this.setState({
                description: e.target.value
            })
        }else if(e.target.id === 'id_pc'){
            this.setState({
                id_pc: e.target.value
            })
        }

    }

    handleClick = (e) => {
        console.log(this.props.match.params.id)
        console.log(this.state.id_pc)
        console.log(this.state.name)
        console.log(this.state.price)
        console.log(this.state.description)
        axios.post('http://localhost:3000/api/addProduct',{
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
            id_pc: this.state.id_pc,
            id_u: this.props.match.params.id,
        })
        .then(function (response) 
        {})
        .catch(function (error) {
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
            <Menu id={this.props.match.params.id}/>
            <div id = "Form" style={{display:"flex", flexDirection: "column"}}>
            <h1>Add product:</h1>
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
                    id="description"
                    label="Item description"
                    type="text"
                    onBlur={this.handleChange}
                    margin="normal"
                />

                <select
                onChange= {this.handleChange}
                name = "id_pc"
                id = "id_pc">

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