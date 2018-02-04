import MarketplaceActionTypes from './MarketplaceActionType';
import MarketplaceDispatcher from './MarketplaceDispatcher';

const Actions = {

  toggleFilters(state) {
    MarketplaceDispatcher.dispatch({
      type: MarketplaceActionTypes.TOGGLE_FILTERS,
      state
    });
  }

};

export default Actions;
