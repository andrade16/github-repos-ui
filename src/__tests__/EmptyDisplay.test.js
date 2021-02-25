import React from "react";
import renderer from "react-test-renderer";
import EmptyDisplay from "../components/EmptyDisplay/EmptyDisplay";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ImWarning } from "react-icons/im";

Enzyme.configure({ adapter: new Adapter() });

describe("<EmptyDisplay/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EmptyDisplay message="No recent commits to display" />);
  });

  it("Renders <EmptyDisplay/> correctly", () => {
    const tree = renderer.create(<EmptyDisplay />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders div DOM elements", () => {
    expect(wrapper.find("div")).toHaveLength(2);
  });

  it("renders the correct icon for EmptyDisplay", () => {
    expect(wrapper.find(ImWarning)).toHaveLength(1);
  });
});
