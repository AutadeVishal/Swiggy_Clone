import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "./Header";

test("Should Load Header Component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header /> 
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
});