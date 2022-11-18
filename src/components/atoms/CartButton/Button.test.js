import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe("Button component", () => {
    it('renders the component properly', () => {
        render(<Button/>);
    });

    it('should receive props correctly', () => {
        const fireSomeEvent = jest.fn();
        render(<Button children={"Button children"} 
            buttonType = ""
            method = {fireSomeEvent}
            id={"5b6c6aeb01a7c38429530884"} dataTestId="button"/>);
        expect(screen.getByTestId("button")).toHaveTextContent("Button children");
        const buttonElement = screen.getByRole("button", { name: "Button children" });
        fireEvent.click(buttonElement);
        expect(fireSomeEvent).toBeCalledTimes(1);

    });

    it('should have the right Button component snapshot', () => {
        const tree = renderer.create(<Button/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

});