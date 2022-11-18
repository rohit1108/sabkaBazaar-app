import Register from "./Register"
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";


describe("Login credentials form on submit", () => {
    const register = {
        firstName: "jhon",
        lastName: "doe",
        email: "group@sapient.com",
        password: "group123",
        confirmPassword: "group123"
    };

    let firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput, submitButton;

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(
            
                <BrowserRouter>
                    <Register/>
                </BrowserRouter>
         
        );
        firstNameInput = screen.getByLabelText(/First Name/i);
        lastNameInput = screen.getByLabelText(/Last Name/i);
        emailInput = screen.getByLabelText(/Email/i);
        // passwordInput = screen.getAllByText(/Password/i);
        // confirmPasswordInput = screen.getByLabelText(/Confirm Password/i);
        submitButton = screen.getByRole("button", { name: /Signup/i });

        userEvent.clear(firstNameInput);
        userEvent.clear(lastNameInput);
        userEvent.clear(emailInput);
        // userEvent.clear(passwordInput);
        // userEvent.clear(confirmPasswordInput);
    });
    const fillAndSubmit = (credentials) => {
        userEvent.type(firstNameInput, credentials.firstName );
        userEvent.type(lastNameInput, credentials.lastName);
        userEvent.type(emailInput, credentials.email);
        // userEvent.type(passwordInput, credentials.password);
        // userEvent.type(confirmPasswordInput, credentials.confirmPassword)
        userEvent.click(submitButton);
    };
    test("should display error when first name is not filled", async () => {
        fillAndSubmit({
            ...register,
            firstName: "",
        });
        const errorMessageEl = await screen.findByText(/First Name is required/i);
        expect(errorMessageEl).toMatchSnapshot();
        expect(errorMessageEl).toBeInTheDocument();
    });

    test("should display error when last name is not filled", async () => {
        fillAndSubmit({
            ...register,
            lastName: "",
        });
        const errorMessageEl = await screen.findByText(/Last Name is required/i);
        expect(errorMessageEl).toMatchSnapshot();
        expect(errorMessageEl).toBeInTheDocument();
    });


    test("should display error when email is not filled", async () => {
        fillAndSubmit({
            ...register,
            email: "",
        });
        const errorMessageEl = await screen.findByText(/Email is required/i);
        expect(errorMessageEl).toMatchSnapshot();
        expect(errorMessageEl).toBeInTheDocument();
    });

    // test("should display error when password is not filled", async () => {
    //     fillAndSubmit({
    //         ...register,
    //         password: "",
    //     });
    //     const errorMessageEl = await screen.findByText(/Password is required/i);
    //     expect(errorMessageEl).toBeInTheDocument();
    // });
    // test("should display error when confirm password is not filled", async () => {
    //     fillAndSubmit({
    //         ...register,
    //         password: "",
    //     });
    //     const errorMessageEl = await screen.findByText(/Confirm Password is required/i);
    //     expect(errorMessageEl).toBeInTheDocument();
    // });
});
