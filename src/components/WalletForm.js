import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletForm extends Component {
  render() {
    const CATEGORY = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const PAYMENT = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { currencies } = this.props;
    return (
      <>
        <label htmlFor="valor">
          Valor:
          <input data-testid="value-input" type="number" />
        </label>

        <label htmlFor="description">
          Descrição:
          <input data-testid="description-input" type="text" />
        </label>

        <label htmlFor="selectCoin">
          <select data-testid="currency-input">
            {currencies.map((currency, key) => (
              <option key={ key }>{ currency }</option>
            ))}
            ;
          </select>
        </label>

        <label htmlFor="payment">
          Método de pagamento:
          <select data-testid="method-input">
            {PAYMENT.map((payment, key) => (<option key={ key }>{ payment }</option>))}
            ;
          </select>
        </label>

        <label htmlFor="category">
          Categoria:
          <select data-testid="tag-input">
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
