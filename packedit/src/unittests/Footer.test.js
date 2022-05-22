import React from 'react';
import Footer from '../components/Footer';
import {render} from "@testing-library/react";

describe("Footer Component", () => {

    it("Footer renders without crashing", () => {
        const {getByTestId} = render(<Footer></Footer>);
        const footer = getByTestId("Footer")
        expect(footer).toBeTruthy();
    });

});