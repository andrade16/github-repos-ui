import React from "react";
import renderer from "react-test-renderer";
import Title from "../components/Title/Title";

describe("<Title/>", () => {
  it("Renders <Title/> correctly", () => {
    const tree = renderer
      .create(<Title title="Recent Commits" style={{ margin: 0 }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
