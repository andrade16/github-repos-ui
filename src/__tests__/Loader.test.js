import React from "react";
import renderer from "react-test-renderer";
import Loader from "../components/Loader/Loader";

describe("Loader", () => {
  it("Renders Loader correctly", () => {
    const tree = renderer.create(<Loader message="Loading..." />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
