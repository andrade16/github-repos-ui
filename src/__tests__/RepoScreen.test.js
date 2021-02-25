import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RepoScreen from "../components/RepoScreen/RepoScreen";
import Navbar from "../components/Navbar/Navbar";
import ScrollArrow from "../components/ScrollArrow/ScrollArrow";

Enzyme.configure({ adapter: new Adapter() });

describe("<RepoScreen/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RepoScreen />);
  });

  it("renders the <Navbar /> component", () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });

  it("renders the spacer div", () => {
    expect(wrapper.find(".spacer")).toHaveLength(1);
  });

  it("renders the ScrollArrow component", () => {
    expect(wrapper.find(ScrollArrow)).toHaveLength(1);
  });
});
