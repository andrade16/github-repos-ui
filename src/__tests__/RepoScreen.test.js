import React from "react";
import renderer from "react-test-renderer";
import RepoScreen from "../components/RepoScreen/RepoScreen";

describe("<RepoScreen/>", () => {
  it("Renders <RepoScreen/> correctly", () => {
    const tree = renderer.create(<RepoScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
