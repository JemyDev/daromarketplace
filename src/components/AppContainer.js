import AppComponent from './Main';
import {Container} from 'flux/utils';
import MarketplaceStore from '../stores/MarketplaceStore';

const getStores = () => {
  return [
    MarketplaceStore
  ];
};

const getState = () => {
  return {
    marketplace: MarketplaceStore.getState()
  }
};

export default Container.createFunctional(AppComponent, getStores, getState);

