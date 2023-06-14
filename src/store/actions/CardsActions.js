
export const fetchProducts = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('https://skillfactory-task.detmir.team/products?page=1&limit=15');
        const data = await response.json();
        if (data && data.meta && data.data) {
          dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data.data });
        }
      } catch (error) {
        console.error(error);
      }
    };
  };
  