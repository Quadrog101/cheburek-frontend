import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListProduct from './components/ListProduct';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="wrapper clear">

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/img/cheburek_logo.png" width={70} height={70}></img>
          <div>
            <h3 className="text-uppercase">Cheburek World</h3>
            <p className="opacity-5">Магазин самых вкусных чебуреков</p>
          </div>
        </div>
      </header>

      <BrowserRouter>
        <Link to="product/create" className="btn btn-success">Add New Product</Link>

        <Routes>
          <Route index element={<ListProduct />} />
          <Route path="product/create" element={<CreateProduct />} />
          <Route path="product/:id/edit" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;