import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar/Navbar';

describe("Navbar", () => {
    it("Renders Navbar correctly", () => {
        const tree = renderer.create(<Navbar />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});





