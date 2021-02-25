import React from "react";
import List from "../components/List/List";
import ListItem from "../components/List/ListItem";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const mockCommitObjs = [
  {
    sha: "950841c25ea005f30050cdac545f87933cea038a",
    author: {
      login: "nhcarrigan",
      avatar_url: "https://avatars.githubusercontent.com/u/63889819?v=4",
    },
    commit: {
      committer: { date: "2021-02-18T16:04:03Z" },
      message: "test",
    },
  },
  {
    sha: "950841c25ea005f30050cdac545f87933fffffff",
    author: {
      login: "wla3ww",
      avatar_url: "https://avatars.githubusercontent.com/u/63889819?v=5",
    },
    commit: {
      committer: { date: "2021-02-18T16:04:03Z" },
      message: "test",
    },
  },
];

describe("<List/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<List data={mockCommitObjs} />);
  });

  it("renders ul DOM element", () => {
    expect(wrapper.find("ul")).toHaveLength(1);
  });

  it("renders ListItem Component", () => {
    expect(wrapper.find(ListItem)).toHaveLength(2);
  });
});
