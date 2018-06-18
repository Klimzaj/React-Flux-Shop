import { ReduceStore } from 'flux/utils';
import ActionTypes from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionAccountBalanceWallet } from 'material-ui';

class SampleStore extends ReduceStore {
  getInitialState() {
    return {
      user: [],
      productCategory: [],
      myInfo: [],
      products: []
    };
  }

  reduce(state, action) {
    switch (action.type) {

      case ActionTypes.TYPE_001:
        return state;

      case ActionTypes.TYPE_002:
        const result = {
          user: action.data.user,
          productCategory: state.productCategory,
          myInfo: state.myInfo,
          products: state.products
        }
        return result;

      // case ActionTypes.TYPE_003:
      //   const result003 = {
      //     orders: action.data.orders,
      //     users: state.users,
      //   }
      //   return result003

      case ActionTypes.TYPE_004:
        const result004 = {
          user: state.user,
          productCategory: action.data.productCategory,
          myInfo: state.myInfo,
          products: state.products
        }
        return result004

      case ActionTypes.TYPE_005:
        const result005 = {
          user: state.user,
          productCategory: state.productCategory,
          myInfo: action.data.myInfo,
          products: state.products
        }
        return result005

      case ActionTypes.TYPE_006:
      const result006 = {
        user: state.user,
        productCategory: state.productCategory,
        myInfo: state.myInfo,
        products: action.data.products
      }
        return result006

      case ActionTypes.TYPE_007:
      const result007 = {
        user: state.user,
        productCategory: state.productCategory,
        myInfo: state.myInfo,
        products: action.data.products
      }
        return result007

      case ActionTypes.TYPE_008:
      const result008 = {
          user: state.user,
          productCategory: state.productCategory,
          myInfo: state.myInfo,
          products: action.data.products
       }
        return result008
      default:
        return state;
    } 
  }
}

export default new SampleStore(AppDispatcher);
