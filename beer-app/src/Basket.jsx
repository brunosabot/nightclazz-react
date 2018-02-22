import React, { Fragment } from 'react';

import { currency, loadBasket } from './lib';

import Menu from './Menu';
import Footer from './Footer';

class Basket extends React.PureComponent {
  state = {
    basket: []
  };

  async componentDidMount() {
    const basketObject = await loadBasket();

    this.setState({ ...basketObject });
  }

  render() {
    return (
      <Fragment>
        <Menu basket={this.state.basket}></Menu>
          <div className="container">

              <div className="panel panel-default">
                <div className="panel-heading">Basket</div>
                <ul className="list-group">
                  {this.state.basket.map((beer, i) => (
                    <li className="list-group-item" key={i}>
                      {beer.label}
                      <span className="label label-primary pull-right">{currency(beer.price)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="panel panel-default">
                  <div className="panel-heading">Order</div>
                  <div className="panel-body">
                      <form>
                          <div className="form-group has-error">
                              <label className="control-label" htmlFor="name">Name</label>
                              <input type="text" id="name" className="form-control" name="name" required />
                          </div>

                          <div className="form-group has-error">
                              <label className="control-label" htmlFor="address">Address</label>
                              <textarea id="address" className="form-control" name="address" required></textarea>
                          </div>

                          <div className="form-group has-error">
                              <label className="control-label" htmlFor="creditCard">Credit card number</label>
                              <input id="creditCard" className="form-control" name="creditCard" pattern="^[0-9]{3}-[0-9]{3}$" />
                          </div>

                          <div className="col-xs-12">
                              <button type="submit" className="btn btn-success pull-right">
                                  Validate
                              </button>
                          </div>
                      </form>
                  </div>
              </div>

          </div>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default Basket;
