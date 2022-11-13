import { createStore, combineReducers } from 'redux';
import cashReducer from './cashReducer';
import optionsReducer from './optionsReducer';
import pageReducer from './pageReducer';
import popupReducer from './popupReducer';

const rootReducer = combineReducers({
  page: pageReducer,
  cash: cashReducer,
  options: optionsReducer,
  popup: popupReducer,
});

const store = createStore(rootReducer);

export default store;
