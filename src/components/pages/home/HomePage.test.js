import Homepage from './HomePage'
import ReactDom from 'react-dom';
import {render, screen} from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
//import { BrowserRouter } from "react-router-dom";
import React from "react";
//import userEvent from '@testing-library/user-event';
//import renderer from 'react-test-renderer';

describe("Category Component", () => {
    
    it('renders the component properly', (count) => {
        const divEl = document.createElement('div');
        ReactDom.render(<Homepage />, divEl);
    });
});