import React from "react";
import renderer from "react-test-renderer";
import { FaGithub } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import Card from "../components/Card/Card";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import Avatar from "../components/Avatar/Avatar";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const mockDataObj = {
  full_name: "test obj",
  html_url: "https://google.com",
  stargazers_count: 400,
  owner: {
    avatar_url: "https://avatars.githubusercontent.com/u/16903644?v=4",
  },
};

describe("<Card/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />);
  });

  it("Renders <Card/> correctly", () => {
    const tree = renderer
      .create(
        <Card
          title={mockDataObj.full_name}
          link={mockDataObj.html_url}
          subtitle={`Stars: ${mockDataObj.stargazers_count}`}
          buttonLabel={"View commits"}
          buttonToolTip={"View commits made in the last 24 hours"}
          avatarUrl={mockDataObj.owner.avatar_url}
          icon={<FaGithub style={{ width: 150, height: 150, marginTop: 5 }} />}
          subIcon={<AiFillStar style={{ color: "yellow" }} />}
          dataObj={mockDataObj}
          onClick={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders div DOM elements", () => {
    expect(wrapper.find("div")).toHaveLength(3);
  });

  it("renders span DOM element", () => {
    expect(wrapper.find("span")).toHaveLength(1);
  });

  it("renders p DOM element", () => {
    expect(wrapper.find("p")).toHaveLength(1);
  });

  it("renders a DOM element", () => {
    expect(wrapper.find("a")).toHaveLength(1);
  });

  it("renders Avatar component", () => {
    expect(wrapper.find(Avatar)).toHaveLength(1);
  });

  it("renders Title component", () => {
    expect(wrapper.find(Title)).toHaveLength(1);
  });

  it("renders Button component", () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
