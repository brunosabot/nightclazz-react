import React from 'react';

const sumPrice = (acc, product) => { return acc + product.price };

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
              Accéder à votre panier ({
                basket.length > 0
                  ? `${basket.length} articles - ${basket.reduce(sumPrice, 0)}€`
                  : 'vide'
              })
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Menu;
