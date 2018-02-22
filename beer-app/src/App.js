import React, { Component } from 'react';

import Menu from './Menu';
import Beer from './Beer';

const priceSorter = (a, b) => a.price - b.price;
const sortByPrice = (items) => items.sort(priceSorter);

const loadBeers = async () => {
  const resBeers = await fetch('http://localhost:1337/api/v1/beers');
  const beers = await resBeers.json();

  return {
    beers,
    beersSortedByPrice: sortByPrice(beers)
  };
};
const loadBasket = async () => {
  const resBasket = await fetch('http://localhost:1337/api/v1/basket');
  const basket = await resBasket.json();

  return { basket };
};
const addBasket = async (beer) => {
  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(beer)
  };
  const resBasket = await fetch('http://localhost:1337/api/v1/basket', options);
  const basket = await resBasket.json();

  return { basket };
};

class App extends Component {
  state = {
    beers: [],
    beersSortedByPrice: [],
    basket: []
  };

  async componentDidMount() {
    const beersObject = await loadBeers();
    const basketObject = await loadBasket();

    this.setState({ ...beersObject, ...basketObject });
  }

  addBeer = async (beer) => {
    const basketObject = await addBasket(beer);
    const beersObject = await loadBeers();

    this.setState({ ...beersObject, ...basketObject });
  }

  render() {
    return (
      <div>
        <Menu basket={this.state.basket}></Menu>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                {this.state.beersSortedByPrice.map(beer => (
                  <Beer key={beer.label} beer={beer} onClick={this.addBeer} />
                ))}
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
