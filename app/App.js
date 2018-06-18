import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import LoginComponent from "./components/LoginComponent";
import RegistrationComponent from "./components/RegistrationComponent";

import MyInfo from "./components/MyInfoComponent";
import MyOrders from "./components/MyOrdersComponent";
import MyProducts from "./components/MyProductsComponent";
import ProductsCategory from "./components/ProductsCategoryComponent";
import AllProducts from "./components/AllProductsComponent";


import AddProductComponent from "./components/AddProductComponent"
const muiTheme = createMuiTheme({});

render(
  <MuiThemeProvider theme={muiTheme}>
    <Router>
      <div>

        {/* <Route path="/" component={LoginComponent}/> */}
        <Route path="/log" component={LoginComponent}/>
        <Route path="/reg" component={RegistrationComponent}/>

        <Route path="/myinfo/:id" component={MyInfo}/>
        <Route path="/myorders/:id" component={MyOrders}/>
        <Route path="/myproducts/:id" component={MyProducts}/>
        <Route path="/cat/:id" component={ProductsCategory}/>
        <Route path="/products/:id" component={AllProducts}/>

        
        <Route path="/addproduct/:id" component={AddProductComponent}/>
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
