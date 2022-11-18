import HomePage from './HomePage';
import ReactDom from 'react-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from "react-router-dom";
import React from "react";
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import './../../../matchMedia';


test('should fetch and load the sections', async() => {
    render(
        <BrowserRouter> 
        <HomePage/>
        </BrowserRouter>
  );


    userEvent.type(screen.getByLabelText('section'));

    const testEl = await screen.findByText( 'Beverages' );


    expect(testEl).toBeInTheDocument();

    const loadingMessage = screen.queryByRole( 'alert', {name : 'fetching'} );
    expect( loadingMessage ).not.toBeInTheDocument();
});

describe("Category Component", () => {
    
    it('renders the component properly', () => {
        const divEl = document.createElement('div');
        ReactDom.render(<BrowserRouter><HomePage/></BrowserRouter>, divEl);
    });

    it('bakery description', async() => {
        render(<BrowserRouter><HomePage/></BrowserRouter>);
        const categoriesText = await screen.findByText('The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.');
        expect(categoriesText).toBeInTheDocument();
    });

  

    it('Beverages description', async() => {
        render(<BrowserRouter><HomePage/></BrowserRouter>);
        const categoriesText = await screen.findByText('Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more.');
        expect(categoriesText).toBeInTheDocument();
    });
    
    it('Beauty & hygiene description', async() => {
        render(<BrowserRouter><HomePage/></BrowserRouter>);
        const categoriesText = await screen.findByText('Buy beauty and personal care products online in India at best prices.');
        expect(categoriesText).toBeInTheDocument();
    });

    
    it('Baby care description', async() => {
        render(<BrowserRouter><HomePage/></BrowserRouter>);
        const categoriesText = await screen.findByText('Shop online for Baby Products, Diapers, Skin Care Products,etc.');
        expect(categoriesText).toBeInTheDocument();
    });
    

    it('should have right Category comp snapshot', () => {
        const tree = renderer.create(<BrowserRouter><HomePage/></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });

   
    
})
 