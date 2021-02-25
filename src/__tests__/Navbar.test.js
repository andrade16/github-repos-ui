import React from "react";
import renderer from "react-test-renderer";
import Navbar from "../components/Navbar/Navbar";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Navbar/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  it("Renders <Navbar/> correctly", () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders header DOM element", () => {
    expect(wrapper.find("header")).toHaveLength(1);
  });

  it("renders h2 DOM element", () => {
    expect(wrapper.find("h2")).toHaveLength(1);
  });

  it("renders nav DOM element", () => {
    expect(wrapper.find("nav")).toHaveLength(1);
  });

  it("renders all a/href DOM elements", () => {
    expect(wrapper.find("a")).toHaveLength(3);
  });
});
