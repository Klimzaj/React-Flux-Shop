import { ReduceStore } from 'flux/utils';
import ActionTypes from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionAccountBalanceWallet } from 'material-ui';

class SampleStore extends ReduceStore {
  getInitialState() {
    return {
      user: []
    };
  }

  reduce(state, action) {
    switch (action.type) {

      case ActionTypes.TYPE_001:
        return state;

      case ActionTypes.TYPE_002:
        const result = {
          user: action.data.user
        }
        return result;

      // case ActionTypes.TYPE_003:
      //   const result003 = {
      //     orders: action.data.orders,
      //     users: state.users,
      //   }
      //   return result003

      // case ActionTypes.TYPE_004:
      //   const result004 = {
      //     order: action.data.order
      //   }
      //   return result004

      // case ActionTypes.TYPE_005:
      //   const result005 = {
      //     productCategory: action.data.productCategory
      //   }
      //   return result005
      default:
        return state;
    } 
  }
}

export default new SampleStore(AppDispatcher);
