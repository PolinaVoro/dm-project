import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import ProductDetailsPage from './components/productDetailsPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
        </Routes>

        <Routes>
          <Route path="/product/:productId" render={() => <Footer hidePagination />} />
          <Route exact path="/" element={<Footer />} />


        </Routes> 

        
      </div>
    </Router>
  );
}

export default App;


