import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
//import { GlobContext } from '../../contexts/AppWideContext';
import Cart from './Cart';
//import { Button } from '../../atoms/CartButton/Button';
import { GlobalContext } from '../../../context/GlobalContext';

describe("Cart Header Component", () => {
    it('renders the component properly and should display the proper initial count in the cart header component', () => {
        render(<GlobalContext.Provider value={{ cartItems: { count: 0 } }}><BrowserRouter><Cart /></BrowserRouter></GlobalContext.Provider>);
        expect(screen.getByTestId("count-items")).toHaveTextContent('0 items');
    });

    it('should have the right cart header component snapshot', () => {
        const tree = renderer.create(<GlobalContext.Provider value={{ cartItems: { count: 0 } }}><BrowserRouter><Cart /></BrowserRouter></GlobalContext.Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    })

});