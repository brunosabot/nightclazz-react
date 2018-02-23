import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import { creditCard, currency, loadBasket, sendBasket } from './lib';

import Menu from './Menu';
import Footer from './Footer';

class Basket extends React.PureComponent {
  state = {
    basket: [],
    name: '',
    address: '',
    creditCard: ''
  };

  async componentDidMount() {
    const basketObject = await loadBasket();

    this.setState({ ...basketObject });
  }

  confirmBasket = async (event) => {
    event.preventDefault();

    if (this.state.name && this.state.address && creditCard.test(this.state.creditCard)) {
      await sendBasket();

      this.props.history.push('/');
    }
  };

  handleName = (event) => {
    this.setState({ name: event.target.value });
  }

  handleAddress = (event) => {
    this.setState({ address: event.target.value });
  }

  handleCreditCard = (event) => {
    this.setState({ creditCard: event.target.value });
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
                    <div className={'form-group' + (this.state.name ? '': ' has-error')}>
                      <label className="control-label" htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        name="name"
                        required
                        onChange={this.handleName}
                        value={this.state.name} />
                    </div>

                    <div className={'form-group' + (this.state.address ? '': ' has-error')}>
                      <label className="control-label" htmlFor="address">Address</label>
                      <textarea
                        id="address"
                        className="form-control"
                        name="address"
                        required
                        onChange={this.handleAddress}
                        value={this.state.address} />
                    </div>

                    <div className={'form-group' + (creditCard.test(this.state.creditCard) ? '': ' has-error')}>
                      <label className="control-label" htmlFor="creditCard">Credit card number</label>
                      <input
                        id="creditCard"
                        className="form-control"
                        name="creditCard"
                        placeholder="123-456"
                        onChange={this.handleCreditCard}
                        value={this.state.creditCard} />
                    </div>

                    <div className="col-xs-12">
                      <button type="submit" className="btn btn-success pull-right" onClick={this.confirmBasket}>
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

export default withRouter(Basket);
