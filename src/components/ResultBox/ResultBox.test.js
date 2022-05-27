import ResultBox from './ResultBox';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="USD" to="PLN" amount={20} />);
      });

    const testCasesPLNtoUSD = [
        {amount: 100, result: 'PLN 100.00 = $28.57'},
        {amount: 50, result: 'PLN 50.00 = $14.29'},
        {amount: 1, result: 'PLN 1.00 = $0.29'},
        {amount: 1000, result: 'PLN 1,000.00 = $285.71'}
    ];
    
    testCasesPLNtoUSD.forEach((testObj) => {
        it('should render proper info about coversion when PLN -> USD', () => {
            //render component
            render(<ResultBox from="PLN" to="USD" amount={testObj.amount} />);

            // find result div
            const result = screen.getByTestId('result');

            //test 
            expect(result).toHaveTextContent(testObj.result);
        });
        cleanup();
    });

    const testCasesUSDtoPLN = [
        {amount: 10, result: '$10.00 = PLN 35.00'},
        {amount: 33, result: '$33.00 = PLN 115.50'},
    ];

    testCasesUSDtoPLN.forEach((testObj) => {
        it('should render proper info about coversion when USD -> PLN', () => {
            //render component
            render(<ResultBox from="USD" to="PLN" amount={testObj.amount} />);

            // find result div
            const result = screen.getByTestId('result');

            //test 
            expect(result).toHaveTextContent(testObj.result);
        });
        cleanup();
    });

    const testCasesSameCurrency = [
        {amount: 12, currency: 'USD', result: "$12.00 = $12.00"},
        {amount: 14, currency: 'PLN', result: "PLN 14.00 = PLN 14.00"},
        {amount: 15, currency: 'USD', result: "$15.00 = $15.00"},
        {amount: 100, currency: 'PLN', result: "PLN 100.00 = PLN 100.00"},
    ];

    testCasesSameCurrency.forEach((testObj) => {
        it('should render proper info about amount when there is no conversion', () => {
            render(<ResultBox from={testObj.currency} to={testObj.currency} amount={testObj.amount} />);

            // find result div
            const result = screen.getByTestId('result');

            //test 
            expect(result).toHaveTextContent(testObj.result);
        });
        cleanup();
        });

    const testCasesNegativeValue = [
        {amount: -10, result: "Wrong value..."},
    ];

    testCasesNegativeValue.forEach((testObj) => {
        it('should render error when there is negative value', () => {
            render(<ResultBox from="PLN" to="USD" amount={testObj.amount} />);

            // find result div
            const result = screen.getByTestId('result');

            //test 
            expect(result).toHaveTextContent(testObj.result);
        });
    });

});