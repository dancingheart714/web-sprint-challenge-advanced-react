import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  //Arrange:
  render(<CheckoutForm />);

  //Act: find the form header
  const header = screen.getByText(/checkout form/i);

  //Assert:  form header is displaying
  expect(header).toBeInTheDocument();
});

test('form shows success message on submit with form details', () => {
  //Arrange:
  render(<CheckoutForm />);

  //Act: fill out and submit the form
  // Find the first name input
  const firstName = screen.getByLabelText(/first name/i);

  //type into the first name input
  userEvent.type(firstName, 'Leah');

  //find the last name input
  const lastName = screen.getByLabelText(/last name/i);

  //type into the last name input
  userEvent.type(lastName, 'King');

  //find the address input
  const address = screen.getByLabelText(/address/i);

  //type into the address input
  userEvent.type(address, 'blah blah blah');

  //find the city input
  const city = screen.getByLabelText(/city/i);

  //type into the city input
  userEvent.type(city, 'somewhere');

  //find the state input
  const state = screen.getByLabelText(/state/i);

  //type into the state input
  userEvent.type(state, 'of mind');

  //find the zip input
  const zip = screen.getByLabelText(/zip/i);

  //type into the zip input
  userEvent.type(zip, '12345');

  //find the button
  const button = screen.getByRole('button');

  //click the button
  userEvent.click(button);

  //Assert:  Check that the success message displays on submit
  const success = screen.getAllByTestId('successMessage');
});
