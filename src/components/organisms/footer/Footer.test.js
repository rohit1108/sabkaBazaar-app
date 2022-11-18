import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import Footer from './Footer';

describe("Footer Component", () => {

    it("should render the component properly", () => {
        const footerEl = document.createElement("footer");
        ReactDom.render(<Footer/>, footerEl); 
    });

    it("should display footer text correctly", () => {
        render(<Footer/>);
        expect(screen.getByTestId("footer-text")).toHaveTextContent("Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt. Ltd.");

    });

    it('should have the right footer component snapshot', () => {
        const tree = renderer.create(<Footer/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});