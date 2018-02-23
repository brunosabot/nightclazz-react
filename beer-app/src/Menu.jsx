import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { sumPrice } from './lib';

const Menu = ({ basket }) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <NavLink to="/" className="navbar-brand">Zenika Ecommerce</NavLink>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li>
            <NavLink to="/basket">
              Accéder à votre panier ({
                basket.length > 0
                  ? `${basket.length} articles - ${basket.reduce(sumPrice, 0)}€`
                  : 'vide'
              })
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const mapStateToProps = (state) => ({
  basket: state.basket.beers
});

export default connect(mapStateToProps)(Menu);
