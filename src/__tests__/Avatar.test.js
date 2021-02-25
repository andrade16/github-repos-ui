import React from "react";
import renderer from "react-test-renderer";
import { FaGithub } from "react-icons/fa";
import Avatar from "../components/Avatar/Avatar";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const mockSrcUrl = "https://avatars.githubusercontent.com/u/16903644?v=4";

describe("<Avatar/>", () => {
  it("Renders <Avatar/> with src correctly", () => {
    const tree = renderer
      .create(<Avatar src={mockSrcUrl} width={150} height={150} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Renders Avatar with icon correctly if src isn't provided", () => {
    const tree = renderer
      .create(
        <Avatar
          width={150}
          height={150}
          icon={<FaGithub style={{ width: 150, height: 150, marginTop: 5 }} />}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Renders Avatar img element when src is passed in", () => {
    const wrapper = shallow(
      <Avatar src={mockSrcUrl} width={150} height={150} />
    );
    expect(wrapper.find("img")).toHaveLength(1);
  });

  it("Renders Avatar div element when src is not passed in", () => {
    const wrapper = shallow(
      <Avatar
        width={150}
        height={150}
        icon={<FaGithub style={{ width: 150, height: 150, marginTop: 5 }} />}
      />
    );
    expect(wrapper.find("div")).toHaveLength(2);
  });
});
