import React from "react";
import renderer from "react-test-renderer";
import Modal from "../components/Modal/Modal";

describe("Modal", () => {
  it("Renders Modal correctly", () => {
    const tree = renderer
      .create(<Modal show={true} onClose={() => {}} header="Recent Commits" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
