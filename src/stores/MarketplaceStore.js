import {ReduceStore} from 'flux/utils';
import MarketplaceActionTypes from '../actions/MarketplaceActionType';
import MarketplaceDispatcher from '../actions/MarketplaceDispatcher';

class MarketplaceStore extends ReduceStore {

  constructor() {
    super(MarketplaceDispatcher);
  }

  reduce(state, action) {
    switch(action.type) {
      case MarketplaceActionTypes.TOGGLE_FILTERS:
        return state;
      default:
        return state;
    }
  }

}

export default MarketplaceStore;
