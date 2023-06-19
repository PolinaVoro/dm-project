const initialState = {
  currentPage: 1,
  totalPages: 11,
  products: [],
  currentProduct: null,
};

export const currentPageReducer = (state = initialState.currentPage, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return action.payload;
    default:
      return state;
  }
};

export const totalPagesReducer = (state = initialState.totalPages, action) => {
  switch (action.type) {
    case 'SET_TOTAL_PAGES':
      return action.payload;
    default:
      return state;
  }
};

export const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return action.payload.products;
    default:
      return state;
  }
};

export const currentProductReducer = (state = initialState.currentProduct, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT_SUCCESS':
      return action.payload;
    case 'FETCH_PRODUCT_ERROR':
      return null;
    default:
      return state;
  }
};



  