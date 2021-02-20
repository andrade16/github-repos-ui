import React from "react";
import renderer from "react-test-renderer";
import { FaGithub } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Card from "../components/Card/Card";


const mockDataObj = {
  full_name: "test obj",
  html_url: "https://google.com",
  stargazers_count: 400,
  owner: {
    avatar_url: "https://avatars.githubusercontent.com/u/16903644?v=4",
  },
};

describe("<Card/>", () => {
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
});
