import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Image from './Image';
describe("Image component", () => {
    it('renders the component properly', () => {
        render(<Image />);
    });

    it('should receive props correctly', () => {
        render(<Image source={"./static/images/products/fruit-n-veg/kiwi-green.jpg"} 
                      alt={"Fresho Kiwi - Green, 3 pcs"}
                      className={"Image-1"}/>);
        screen.getByAltText("Fresho Kiwi - Green, 3 pcs");

    });

    it('should have the right Image component snapshot', () => {
        const tree = renderer.create(<Image />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});