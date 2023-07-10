import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Main from './components/Main/main';
import ProductDetailsPage from './components/Main/productDetailsPage';

import OrdersPage from './components/ordersPage';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
        <Routes>
          <Route
            path="/product/:productId"
            element={<Footer hidePagination />}
          />
          <Route exact path="/" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






