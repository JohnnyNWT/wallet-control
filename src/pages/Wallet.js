import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <>
        <Header />
        <span data-testid="email-field">{ userEmail }</span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
        <div>TrybeWallet</div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    userEmail: state.user.email,
  };
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
