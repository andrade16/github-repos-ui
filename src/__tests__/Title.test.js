import React from "react";
import renderer from "react-test-renderer";
import Title from "../components/Title/Title";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Title/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Title title="Recent Commits" style={{ margin: 0 }} />);
  });

  it("Renders <Title/> correctly", () => {
    const tree = renderer
      .create(<Title title="Recent Commits" style={{ margin: 0 }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders h4 DOM element", () => {
    expect(wrapper.find("h4")).toHaveLength(1);
  });
});
