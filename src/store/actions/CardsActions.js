export const setCurrentPage = (page) => ({
  type: 'SET_CURRENT_PAGE',
  payload: page,
});

export const fetchProducts = (page = 1, limit = 15, productId = null) => {
  return async (dispatch) => {
    try {
      const validPage = Math.max(1, Math.min(page, 11));
      const validLimit = Math.max(1, Math.min(limit, 15));

      let url = `https://skillfactory-task.detmir.team/products?page=${validPage}&limit=${validLimit}`;
      if (productId) {
        url = `https://skillfactory-task.detmir.team/products/${productId}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (productId) {
        
        dispatch({
          type: 'FETCH_PRODUCT_SUCCESS',
          payload: data,
        });
      } else if (data && data.meta && data.data) {
        
        const products = data.data;
        const totalCount = data.meta.total;

        dispatch({
          type: 'FETCH_PRODUCTS_SUCCESS',
          payload: {
            products: products,
            totalPages: totalCount,
          },
        });
      }
    } catch (error) {
      console.error(error);
      if (productId) {
        dispatch({
          type: 'FETCH_PRODUCT_ERROR',
          payload: error.message,
        });
      }
    }
  };
};




