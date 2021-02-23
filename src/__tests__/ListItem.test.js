import React from "react";
import renderer from "react-test-renderer";
import ListItem from "../components/List/ListItem";
import { formatDateFromNow } from "../utils/helpers";

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
  it("Renders <ListItem/> correctly", () => {
    const tree = renderer
      .create(
        <ListItem
          title={mockCommitObj.author.login}
          subtitle={`commited ${formatDateFromNow(
            mockCommitObj.commit.committer.date
          )}`}
          content={mockCommitObj.commit.message}
          avatarSrc={mockCommitObj.author.avatar_url}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
