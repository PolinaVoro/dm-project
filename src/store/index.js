import { combineReducers } from 'redux';
import { currentPageReducer, totalPagesReducer, productsReducer } from './reducers/CardsReducers';

const rootReducer = combineReducers({
  pagination: combineReducers({
    currentPage: currentPageReducer,
    totalPages: totalPagesReducer,
  }),
  products: productsReducer,
});

export default rootReducer;
