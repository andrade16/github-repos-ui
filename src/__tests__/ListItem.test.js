import React from "react";
import ListItem from "../components/List/ListItem";
import Avatar from "../components/Avatar/Avatar";
import { formatDateFromNow } from "../utils/helpers";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const mockCommitObj = {
  sha: "950841c25ea005f30050cdac545f87933cea038a",
  author: {
    login: "nhcarrigan",
    avatar_url: "https://avatars.githubusercontent.com/u/63889819?v=4",
  },
  commit: {
    committer: { date: "2021-02-18T16:04:03Z" },
    message: "test",
  },
};

describe("<ListItem/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ListItem
        title={mockCommitObj.author.login}
        subtitle={`commited ${formatDateFromNow(
          mockCommitObj.commit.committer.date
        )}`}
        content={mockCommitObj.commit.message}
        avatarSrc={mockCommitObj.author.avatar_url}
      />
    );
  });

  it("renders li DOM element", () => {
    expect(wrapper.find("li")).toHaveLength(1);
  });

  it("renders div DOM elements", () => {
    expect(wrapper.find("div")).toHaveLength(5);
  });

  it("renders Avatar component", () => {
    expect(wrapper.find(Avatar)).toHaveLength(1);
  });
});
