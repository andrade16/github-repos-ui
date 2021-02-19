import React from "react";
import renderer from "react-test-renderer";
import { FaGithub } from "react-icons/fa";
import Avatar from "../components/Avatar/Avatar";

const mockSrcUrl = "https://avatars.githubusercontent.com/u/16903644?v=4";

describe("Avatar", () => {
  it("Renders Avatar with src correctly", () => {
    const tree = renderer
      .create(
        <Avatar
          src={mockSrcUrl}
          width={150}
          height={150}
        />
      )
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
});
