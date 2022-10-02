import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <span data-testid="email-field">
          Email:
          { userEmail }
        </span>
        <p data-testid="total-field">Despesa Total: 0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userEmail: state.user.email,
  };
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
