import React from "react";
import renderer from "react-test-renderer";
import ScrollArrow from "../components/ScrollArrow/ScrollArrow";

describe("<ScrollArrow/>", () => {
  it("Renders <ScrollArrow/> correctly", () => {
    const tree = renderer.create(<ScrollArrow />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
