import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
//import { AppWideContext } from '../../contexts/AppWideContext';
import ReactDom from "react-dom";
import Heading from './Heading';
import { GlobalContext } from '../../../context/GlobalContext';

describe("Header Component", () => {

    it("should render the component properly", () => {
        const headerEl = document.createElement("header");
        ReactDom.render(<GlobalContext.Provider value={{ cartItems: { count: 0 } }}><BrowserRouter><Heading/></BrowserRouter></GlobalContext.Provider>, headerEl); 
    });

    it('should have the right header component snapshot', () => {
        const tree = renderer.create(<GlobalContext.Provider value={{ cartItems: { count: 0 } }}><BrowserRouter><Heading /></BrowserRouter></GlobalContext.Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});