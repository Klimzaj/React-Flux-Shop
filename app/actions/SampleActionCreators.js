import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';
import axios from 'axios'
import LoginComponent from '../components/LoginComponent';
const SampleActionCreators = {

  // action001(arg1) {
  //   AppDispatcher.dispatch({
  //     type: ActionTypes.TYPE_001,
  //     data: 'RESULT OF YOUR ACTION',
  //   });
  // },

  action002(arg1) {
    // console.log(arg1)
    axios.get(`http://localhost:3000/api/login`,
    {params:{
      login: arg1.login,
      password: arg1.password
    }})
    .then(function (response) {
      let result = response.data.data
      console.log(result)
      window.location = '/aaaa'
      AppDispatcher.dispatch({
        type: ActionTypes.TYPE_002,
        data: {
          "user": result
        },
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  },
  action003(arg1) {
    axios.post('http://localhost:3000/api/addUser', {
      name: '', //arg1.name,
      surname: '', // arg1.surname,
      address: '',//arg1.address,
      phone: '',// arg1.phone,
      email: '',//arg1.email,
      login: arg1.login,
      password: arg1.password
    })
    .then(function (response) {
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  // action004(arg1) {
  //   axios.get('http://localhost:3001/api/orders',{
  //     oid: arg1.oid
  //   })
  //   .then(function (response) {
  //     let result = response.data.data.order
  //     // console.log(response.data.data.order)
  //     AppDispatcher.dispatch({
  //       type: ActionTypes.TYPE_004,
  //       data: {
  //         "order": result,
  //       },
  //     })
  //   }).catch(function (error) {
  //       console.log(error);
  //   });
  // },
  // action005() {
  //   axios.get('http://localhost:3001/api/productcategory').then(function (response) {
  //     let result = response.data.data.productsCategory
  //     // console.log(response.data.data.productsCategory)
  //     AppDispatcher.dispatch({
  //       type: ActionTypes.TYPE_005,
  //       data: {
  //         "productCategory": result,
  //       },
  //     })
  //   }).catch(function (error) {
  //     console.log(error);
  //   });
  // },
  // action006(arg1) {
  //   axios.post('http://localhost:3001/api/product').then(function (response) {
  //     product: arg1.product
  //   })
  // }

};

export default SampleActionCreators;
