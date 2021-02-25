import React from "react";
import renderer from "react-test-renderer";
import Modal from "../components/Modal/Modal";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Modal/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Modal show={true} onClose={() => {}} header="Recent Commits" />
    );
  });

  it("Renders <Modal/> correctly", () => {
    const tree = renderer
      .create(<Modal show={true} onClose={() => {}} header="Recent Commits" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders div DOM elements", () => {
    expect(wrapper.find("div")).toHaveLength(5);
  });

  it("renders Title component", () => {
    expect(wrapper.find(Title)).toHaveLength(1);
  });

  it("renders Button component", () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
