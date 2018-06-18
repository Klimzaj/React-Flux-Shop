import React from "react";
import { Switch, Route} from "react-router-dom";

import LoginComponent from "./LoginComponent";
import RegistrationComponent from "./RegistrationComponent";
import MyInfo from "./MyInfoComponent";
import MyOrders from "./MyOrdersComponent";
import MyProducts from "./MyProductsComponent";
import AllProducts from "./AllProductsComponent";

import AddProductComponent from "./AddProductComponent"

const MyRouter = () => (
    <Switch>
        <Route path="/log" component={LoginComponent}/>
        <Route path="/reg" component={RegistrationComponent}/>
        <Route path="/myinfo/0" component={LoginComponent}/>
        <Route path="/myinfo/:id" component={MyInfo}/>
        <Route path="/myorders/:id" component={MyOrders}/>
        <Route path="/myproducts/:id" component={MyProducts}/>
        <Route path="/products/:id" component={AllProducts}/>
       
        <Route path="/addproduct/:id" component={AddProductComponent}/>

        <Route component={LoginComponent}/>
    </Switch>
);

export default MyRouter
