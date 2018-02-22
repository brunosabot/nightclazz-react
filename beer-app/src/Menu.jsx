import React from 'react';

const Menu = ({ basket }) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="/home.html">Zenika Ecommerce</a>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li>
            <a href="/basket.html">
              Accéder à votre panier ({basket.length} articles -&nbsp;
              {basket.reduce((acc, product) => { return acc + product.price }, 0)}€)
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Menu;
