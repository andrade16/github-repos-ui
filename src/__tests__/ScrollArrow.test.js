import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { FaArrowCircleUp } from "react-icons/fa";
import ScrollArrow from "../components/ScrollArrow/ScrollArrow";

Enzyme.configure({ adapter: new Adapter() });

describe("<ScrollArrow/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ScrollArrow />);
  });

  it("Renders <ScrollArrow/> correctly", () => {
    const tree = renderer.create(<ScrollArrow />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the correct icon for ScrollArrow", () => {
    expect(wrapper.find(FaArrowCircleUp)).toHaveLength(1);
  });
});
