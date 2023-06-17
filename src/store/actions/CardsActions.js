
export const setCurrentPage = (page) => ({
  type: 'SET_CURRENT_PAGE',
  payload: page,
});



export const fetchProducts = (page = 1, limit = 15) => {
  return async (dispatch) => {
    try {
      
      const validPage = Math.max(1, Math.min(page, 11));
      const validLimit = Math.max(1, Math.min(limit, 15));

      const response = await fetch(`https://skillfactory-task.detmir.team/products?page=${validPage}&limit=${validLimit}`);

      const data = await response.json();
      if (data && data.meta && data.data) {
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
    }
  };
};




