import React from "react";
import renderer from "react-test-renderer";
import Button from "../components/Button/Button";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

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

  it("renders button DOM element", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });
});
