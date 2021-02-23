import React from "react";
import renderer from "react-test-renderer";
import Button from "../components/Button/Button";

describe("<Button/>", () => {
  it("Renders <Button/> correctly", () => {
    const tree = renderer
      .create(
        <Button
          label="View Commits"
          color={"#007bff"}
          tooltip="tooltip Test"
          onClick={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
