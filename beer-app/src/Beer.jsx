import React from 'react';

const Beer = ({ beer, onClick }) => (
  <div className="col-sm-4 col-lg-4 col-md-4">
    <div className="thumbnail">
      <img src={beer.image} alt="" />
      <div className="caption">
        <h4 className="pull-right">{beer.price} €</h4>
        <h4>
          <span>{beer.label}</span>
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
