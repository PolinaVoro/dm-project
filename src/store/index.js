import { combineReducers } from 'redux';
import { currentPageReducer, totalPagesReducer, productsReducer, currentProductReducer } from './reducers/CardsReducers';
import cartReducers from './reducers/cartReducers';
import ordersReducer from './reducers/OrdersRedusers';


const rootReducer = combineReducers({
  pagination: combineReducers({
    currentPage: currentPageReducer,
    totalPages: totalPagesReducer,
  }),
  products: productsReducer,
  currentProduct: currentProductReducer,
  cart: cartReducers,
  orders: ordersReducer,
  
});

export default rootReducer;
