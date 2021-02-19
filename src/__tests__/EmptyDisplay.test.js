import React from "react";
import renderer from "react-test-renderer";
import EmptyDisplay from "../components/EmptyDisplay/EmptyDisplay";

describe("EmptyDisplay", () => {
  it("Renders EmptyDisplay correctly", () => {
    const tree = renderer.create(<EmptyDisplay />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
