export const FETCH_ORDERS_REQUEST = 'FETCH_ORDERS_REQUEST';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
export const PLACE_ORDER_FAILURE = 'PLACE_ORDER_FAILURE';

export const fetchOrdersRequest = () => ({
  type: FETCH_ORDERS_REQUEST,
});

export const fetchOrdersSuccess = (orders) => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: orders,
});

export const fetchOrdersFailure = (error) => ({
  type: FETCH_ORDERS_FAILURE,
  payload: error,
});

export const placeOrderSuccess = () => ({
  type: PLACE_ORDER_SUCCESS,
});

export const placeOrderFailure = (error) => ({
  type: PLACE_ORDER_FAILURE,
  payload: error,
});

export const fetchOrdersAction = (page, limit) => async (dispatch) => {
  dispatch(fetchOrdersRequest());
  try {
    const response = await fetch(
      `https://skillfactory-task.detmir.team/orders?page=${page}&limit=${limit}`
    );
    if (!response.ok) {
      throw new Error(
        `Error fetching orders: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    const orders = data.data;
    dispatch(fetchOrdersSuccess(orders));
  } catch (error) {
    console.error('Error fetching orders:', error);
    dispatch(fetchOrdersFailure(error));
  }
};



