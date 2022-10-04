import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletForm extends Component {
  state = {
    expenseAmount: '',
    description: '',
    currency: 'USD',
    paymentMethod: 'Dinheiro',
    categorys: 'Alimentação',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    console.log(target.active);
  };

  render() {
    const CATEGORY = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const PAYMENT = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { currencies } = this.props;
    const { expenseAmount, description, currency, paymentMethod, categorys } = this.state;
    return (
      <>
        <label htmlFor="valor">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            name="expenseAmount"
            value={ expenseAmount }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="selectCoin">
          <select
            data-testid="currency-input"
            name="currency"
            active={ currency }
            onClick={ this.handleChange }
          >
            {currencies.map((currencie, key) => (
              <option key={ key }>{ currencie }</option>
            ))}
            ;
          </select>
        </label>

        <label htmlFor="payment">
          Método de pagamento:
          <select
            data-testid="method-input"
            name="paymentMethod"
            active={ paymentMethod }
            onClick={ this.handleChange }
          >
            {PAYMENT.map((payment, key) => (<option key={ key }>{ payment }</option>))}
            ;
          </select>
        </label>

        <label htmlFor="category">
          Categoria:
          <select
            data-testid="tag-input"
            name="categorys"
            active={ categorys }
            onClick={ this.handleChange }
          >
            {CATEGORY.map((category, key) => (<option key={ key }>{ category }</option>))}
            ;
          </select>
        </label>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    currencies: state.wallet.currencies,
  };
}

WalletForm.propTypes = {
  currencies: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
