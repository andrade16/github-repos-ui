import React from "react";
import renderer from "react-test-renderer";
import Loader from "../components/Loader/Loader";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Loader/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Loader message="Loading..." />);
  });

  it("Renders <Loader/> correctly", () => {
    const tree = renderer.create(<Loader message="Loading..." />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders div DOM elements", () => {
    expect(wrapper.find("div")).toHaveLength(2);
  });

  it("renders span DOM elements", () => {
    expect(wrapper.find("span")).toHaveLength(1);
  });
});
