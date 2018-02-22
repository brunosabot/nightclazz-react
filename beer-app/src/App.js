import React, { Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './Home';
import Basket from './Basket';

const App = () => (
  <HashRouter>
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/basket" component={Basket} />
    </Fragment>
  </HashRouter>
);

export default App;
