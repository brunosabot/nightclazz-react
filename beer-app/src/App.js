import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import Home from './Home';
import Basket from './Basket';

import { updateBasket } from './basket.store';
import { updateBeers } from './beers.store';

class App extends React.PureComponent {
  componentDidMount() {
    this.props.loadBeers();
    this.props.loadBasket();
  }

  render() {
    return (
      <HashRouter>
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/basket" component={Basket} />
        </Fragment>
      </HashRouter>
    );
  }
}

App.propTypes = {};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  loadBeers: updateBasket(dispatch),
  loadBasket: updateBeers(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
