import Login from "./Login"
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import useFormLogin from "../../../utils/useFormLogin"

describe("Login credentials form on submit", () => {
    const login = {
        email: "group@sapient.com",
        password: "Password123!",
    };

    let emailInput, passwordInput, submitButton;

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
        );

        emailInput = screen.getByLabelText(/Email/i);
        passwordInput = screen.getByLabelText(/Password/i);
        submitButton = screen.getByRole("button", { name: /Login/i });

        userEvent.clear(emailInput);
        userEvent.clear(passwordInput);
    });
    const fillAndSubmit = (useFormLogin) => {
        userEvent.type(emailInput, useFormLogin.email);
        userEvent.type(passwordInput, useFormLogin.password);
        userEvent.click(submitButton);
    };
    test("should display error when email is not filled", async () => {
        fillAndSubmit({
            ...login,
            email: "",
            
        });
        const errorMessageEl = await screen.findByText(/Email is required/i);
        expect(errorMessageEl).toMatchSnapshot();
        expect(errorMessageEl).toBeInTheDocument();
    });

    test("should display error when password is not filled", async () => {
        fillAndSubmit({
            ...login,
            password: "",
        });
        const errorMessageEl = await screen.findByText(/Password is required/i);
        expect(errorMessageEl).toMatchSnapshot();
        expect(errorMessageEl).toBeInTheDocument();
    });
});
