import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';

describe('Testes da página de Login', () => {
  test('Testa a rota', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    expect(history.location.pathname).toBe('/');
  });

  test('Testa se existem os inputs de Email e Senha', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId(/email-input/i);
    const passwordInput = screen.getByTestId('password-input');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('Testa se existe um botão de entrar na página', () => {
    renderWithRouterAndRedux(<App />);
    const btn = screen.getByTestId('btn');
    expect(btn).toBeInTheDocument();
    expect(btn).toBeDisabled();
  });

  test('Verifica a validação do email e botão', () => {
    renderWithRouterAndRedux(<App />);
    const btn = screen.getByTestId('btn');
    const emailInput = screen.getByTestId('email-input');
    userEvent.type(emailInput, 'testando');
    expect(btn).toBeDisabled();
  });

  test('Verifica login do usuário', () => {
    const { store } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const btn = screen.getByTestId('btn');
    userEvent.type(emailInput, 'testando@teste.com');
    userEvent.type(passwordInput, 'testando');
    userEvent.click(btn);
    expect(store.getState().user.email).toBe('testando@teste.com');
  });
});
