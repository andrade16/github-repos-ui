import React from "react";
import renderer from "react-test-renderer";
import List from "../components/List/List";

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

describe("List", () => {
  it("Renders List correctly", () => {
    const tree = renderer.create(<List data={mockCommitObjs} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
