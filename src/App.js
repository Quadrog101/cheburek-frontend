import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListProduct from './components/ListProduct';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="wrapper clear">

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="https://dimdey.live/dev/images/cheburek_logo.png" width={70} height={70} alt="noimg"></img>
          <div>
            <h3 className="text-uppercase">Cheburek World</h3>
            <p className="opacity-5">Магазин самых вкусных чебуреков</p>
          </div>
        </div>
      </header>

      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route index path="/" element={<ListProduct />} />
          <Route path="product/create" element={<CreateProduct />} />
          <Route path="product/:id/edit" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;