import React from 'react';
import NavBar from '../components/NavBar';
import {render} from "@testing-library/react";

describe("NavBar Component", () => {

    it("Navbar renders without crashing", () => {
        const {getByTestId} = render(<NavBar></NavBar>);
        const nav = getByTestId("NavBar")
        expect(nav).toBeTruthy();
    });

});