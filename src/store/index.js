import { combineReducers } from 'redux';
import { currentPageReducer, totalPagesReducer, productsReducer, currentProductReducer } from './reducers/CardsReducers';


const rootReducer = combineReducers({
  pagination: combineReducers({
    currentPage: currentPageReducer,
    totalPages: totalPagesReducer,
  }),
  products: productsReducer,
  currentProduct: currentProductReducer,
 
  
});

export default rootReducer;
