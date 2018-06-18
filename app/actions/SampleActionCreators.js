import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import LoginComponent from '../components/LoginComponent';
import { Link } from 'react-router-dom';

const SampleActionCreators = {

  action001(arg1) {
    AppDispatcher.dispatch({
      type: ActionTypes.TYPE_001
    });
  },

  action002(arg1) {
    // console.log(arg1)
    axios.get(`http://localhost:3000/api/login`,
    {params:{
      login: arg1.login,
      password: arg1.password
    }})
    .then(function (response) {
      let result = response.data.data.user//[0].uid
      console.log(result)
      // window.location = `/myinfo/${result}`
      // history.push(`/myinfo/${result}`);
      // {<Link to={`/myinfo/${result}`}/>}
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
  action004() {
      axios.get('http://localhost:3000/api/allCat').then(function (response) {
        let result = response.data.data.productCategory
        AppDispatcher.dispatch({
          type: ActionTypes.TYPE_004,
          data: {
            "productCategory": result,
          },
        })
      }).catch(function (error) {
        console.log(error);
      });
    },
  action005(arg1) {
    axios.get(`http://localhost:3000/api/myInfo/${arg1}`)
    .then(function (response) {
      let result = response.data.data.userDetails
      AppDispatcher.dispatch({
        type: ActionTypes.TYPE_005,
        data: {
          "myInfo": result
        },
      })
    }).catch(function (error) {
        console.log(error);
    });
  },
  action006(arg1) {
    axios.get(`http://localhost:3000/api/allProducts`)
    .then(function (response) {
      let result = response.data.data.product
      AppDispatcher.dispatch({
        type: ActionTypes.TYPE_006,
        data: {
          "products": result
        },
      })
    }).catch(function (error) {
        console.log(error);
    });
  },
  action007(arg1) { //my orders
    axios.get(`http://localhost:3000/api/productBoughtId/${arg1}`)
    .then(function (response) {
      let result = response.data.data.product
      AppDispatcher.dispatch({
        type: ActionTypes.TYPE_007,
        data: {
          "products": result
        },
      })
    }).catch(function (error) {
        console.log(error);
    });
  },
  action008(arg1) { //my products
    axios.get(`http://localhost:3000/api/productId/${arg1}`)
    .then(function (response) {
      let result = response.data.data.product
      AppDispatcher.dispatch({
        type: ActionTypes.TYPE_008,
        data: {
          "products": result
        },
      })
    }).catch(function (error) {
        console.log(error);
    });
  },
  // 
  // action006(arg1) {
  //   axios.post('http://localhost:3001/api/product').then(function (response) {
  //     product: arg1.product
  //   })
  // }

};

export default withRouter(SampleActionCreators);
