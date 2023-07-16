import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import Login from './Login';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

describe('Login component', () => {
  test('renders the login form correctly', () => {
    const {getByPlaceholderText, getByText} = render(<Login />);

    const emailInput = getByPlaceholderText('Emails');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
    expect(loginButton).toBeDefined();
  });

  test('displays loading state when login button is pressed', async () => {
    const {getByText} = render(<Login />);
    const loginButton = getByText('Login');

    fireEvent.press(loginButton);

    await waitFor(() => {
      const loadingText = getByText('Loading...');
      expect(loadingText).toBeDefined();
    });
  });

  test('dispatches login action when login button is pressed', async () => {
    const {getByPlaceholderText, getByText} = render(<Login />);
    const emailInput = getByPlaceholderText('Emails');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    fireEvent.changeText(emailInput, 'john@mail.com');
    fireEvent.changeText(passwordInput, 'changeme');
    fireEvent.press(loginButton);

    // TODO: Add your assertions for dispatching the login action
  });
});
