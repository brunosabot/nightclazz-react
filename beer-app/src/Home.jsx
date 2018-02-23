import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { updateBeers } from './beers.store';
import { addBeerToBasket } from './basket.store';

import Menu from './Menu';
import Footer from './Footer';
import Beer from './Beer';

class Home extends React.PureComponent {
  addBeer = async (beer) => {
    this.props.addBeerToBasket(beer);
    this.props.updateBeers();
  }

  render() {
    return (
      <Fragment>
        <Menu></Menu>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                {this.props.beers.map(beer => (
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

const mapStateToProps = (state) => ({
  beers: state.beers.sortedBeers,
  basket: state.basket.beers
});
const mapDispatchToProps = (dispatch) => ({
  addBeerToBasket: addBeerToBasket(dispatch),
  updateBeers: updateBeers(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
