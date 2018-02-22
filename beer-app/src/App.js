import React, { Component } from 'react';

import Menu from './Menu';
import Beer from './Beer';

class App extends Component {
  state = {
    beers: [
      {
        "label": "Queue de Charrue",
        "description": "La Queue de Charrue est une famille de bières brassées pour la Brasserie Vanuxeem. La plus connue et typique est la Queue de Charrue brune. Son nom ...",
        "image": "/static/images/queuedecharrue.jpg",
        "price": 3.70,
        "stock": 2
      },
      {
        "label": "La Corbeau",
        "description": "La bière du Corbeau est une bière blonde trés gazeuse et avec une belle mousse persistante.Le nez propose des arômes de citron, de végétal et de caramel.la ...",
        "image": "/static/images/corbeau.jpg",
        "price": 3.10,
        "stock": 2
      },
      {
        "label": "Jack Hammer",
        "description": "Selon la rumeur, la Jack Hammer serait une bière tellement houblonnée que l'on y retrouverait plus d'amertume que le palais humain ne puisse détecter.",
        "image": "/static/images/jeackhammer.jpg",
        "price": 3.50,
        "stock": 2
      },
      {
        "label": "Rince Cochon",
        "description": "Autrefois brassée à Annoeullin par la SBA sous le nom de \"Le Rince Cochon\", cette bière est aujourd'hui brassée par la brasserie Haacht, en Belgique, qui ...",
        "image": "/static/images/rincecochon.jpg",
        "price": 3.50,
        "stock": 2
      }
    ],
    basket: []
  };

  addBeer = (beer) => {
    const beers = this.state.beers.map(b => {
      if (beer.label === b.label) {
        return { ...b, stock: b.stock - 1 };
      }

      return b;
    });

    this.setState({
      basket: [ ...this.state.basket, beer ],
      beers
    });
  }

  render() {
    return (
      <div>
        <Menu basket={this.state.basket}></Menu>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                {this.state.beers.map(beer => <Beer key={beer.label} beer={beer} onClick={this.addBeer} />)}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <hr />
          <footer>
            <div className="row">
              <div className="col-lg-12">
                <p>Zenika ECommerce</p>
              </div>
            </div>
          </footer>
        </div>

      </div>
    );
  }
}

export default App;
