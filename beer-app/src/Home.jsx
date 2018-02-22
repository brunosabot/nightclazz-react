import React, { Fragment } from 'react';

import { loadBeers, loadBasket, addBasket } from './lib';

import Menu from './Menu';
import Footer from './Footer';
import Beer from './Beer';

class Home extends React.PureComponent {
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
      <Fragment>
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
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default Home;
