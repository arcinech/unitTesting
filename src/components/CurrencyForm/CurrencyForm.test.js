import userEvent from '@testing-library/user-event';
import { cleanup, render, screen } from '@testing-library/react';
import CurrencyForm from './CurrencyForm';


describe('Component CurrencyForm', () => {
  it('should render without crashing', () => {
    render(<CurrencyForm action={() => {}} />);
  });


  const testCases = [
    { amount: '100', from: 'PLN', to: 'USD' },
    { amount: '20', from: 'USD', to: 'PLN' },
    { amount: '200', from: 'PLN', to: 'USD' },
    { amount: '345', from: 'USD', to: 'PLN' },
  ];

  for(const testObj of testCases){
  
  it('should run action callback with proper data on form submit', () => {
    const action = jest.fn();
    // render component
    render(<CurrencyForm action={action} />);

    // find “convert” button
    const submitButton = screen.getByText('Convert');
    
    //find input fields
    const amountInput = screen.getByTestId('amount');
    const fromInput = screen.getByTestId('fromSelect');
    const toInput = screen.getByTestId('toSelect'); 

    // simulate user filling fields
    userEvent.type(amountInput, testObj.amount);
    userEvent.selectOptions(fromInput, testObj.from);
    userEvent.selectOptions(toInput, testObj.to);
    
    // simulate user click on "convert" button
    userEvent.click(submitButton);

    // check if action callback was called once
    expect(action).toHaveBeenCalledTimes(1);
    expect(action).toHaveBeenCalledWith({ amount: parseInt(testObj.amount), from: testObj.from, to: testObj.to});
    });

    // cleanup rendered component after case
    cleanup();
  }
});