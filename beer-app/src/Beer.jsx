import React from 'react';

import { currency, uppercase } from './lib';

const Beer = ({ beer, onClick }) => beer.stock === 0 ? null : (
  <div className="col-sm-4 col-lg-4 col-md-4">
    <div className={'thumbnail' + (beer.stock === 1 ? ' last' : '')}>
      <img src={beer.image} alt="" />
      <div className="caption">
        <h4 className="pull-right">{currency(beer.price)}</h4>
        <h4>
          <span>{uppercase(beer.label)}</span>
        </h4>
        <p>{beer.description}</p>
      </div>
      <div className="ratings">
        <p>
          <span className="glyphicon glyphicon-star"></span>
          <span className="glyphicon glyphicon-star"></span>
          <span className="glyphicon glyphicon-star"></span>
          <span className="glyphicon glyphicon-star"></span>
          <span className="glyphicon glyphicon-star-empty"></span>
        </p>
        <button onClick={() => onClick(beer)} type="button" className="pull-right btn btn-primary" aria-label="Ajoutez au Panier">Ajouter</button>
      </div>
    </div>
  </div>
);

export default Beer;
