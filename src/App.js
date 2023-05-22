import React from 'react';

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
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg" width={18} height={18}></img>
            <span>1234 руб.</span>
          </li>
          <li><img src="/img/user.svg" width={18} height={18}></img></li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все чебуреки</h1>

        <div className="d-flex">
          <div className="card">
            <img src="/img/cheburek_logo.png" width={150} height={150} alt="noimg"></img>
            <h5>Чебурек классический</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>129 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" width={15} height={15} alt="noimg"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/cheburek_logo.png" width={150} height={150} alt="noimg"></img>
            <h5>Чебурек классический</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>129 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" width={15} height={15} alt="noimg"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/cheburek_logo.png" width={150} height={150} alt="noimg"></img>
            <h5>Чебурек классический</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>129 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" width={15} height={15} alt="noimg"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/cheburek_logo.png" width={150} height={150} alt="noimg"></img>
            <h5>Чебурек классический</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>129 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" width={15} height={15} alt="noimg"></img>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;