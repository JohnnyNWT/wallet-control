import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actionUserEmail from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { userEmail, history } = this.props;
    const { email } = this.state;
    userEmail(email);
    history.push('/carteira');
  };

  render() {
    const { password, email } = this.state;
    const validEmail = email.toLocaleLowerCase().match(/[a-z]+@[a-z]+.com/);
    const MIN_LENGTH = 6;
    return (
      <div>
        <input
          data-testid="email-input"
          name="email"
          type="email"
          placeholder="email@example.com"
          onChange={ this.handleChange }
        />
        <br />
        <input
          data-testid="password-input"
          name="password"
          type="password"
          minLength="6"
          placeholder="Insira sua senha"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ password.length < MIN_LENGTH || !validEmail }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userEmail: (payload) => dispatch(actionUserEmail(payload)),
  };
}

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
