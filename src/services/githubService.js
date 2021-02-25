import moment from "moment";

const baseGithubUrl = "https://api.github.com";
const headers = {
  "Content-type": "application/json; charset=UTF-8",
  "Accept": "application/vnd.github.v3+json",
};

export async function getStarredRepos() {
  // fetches the top 100 starred repositories
  try {
    const response = await fetch(
      `${baseGithubUrl}/search/repositories?q=stars:>1&sort=stars&per_page=100`,
      { headers }
    );
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getCommits(repo) {
  // fetches commits made in the past 24 hours for a repository
  const owner = repo.owner.login;
  const repository = repo.name;
  const today = moment().toISOString(true);
  const yesterday = moment(today).subtract(24, "hours").toISOString(true);

  try {
    const response = await fetch(
      `${baseGithubUrl}/repos/${owner}/${repository}/commits?since=${yesterday}&until=${today}`,
      { headers }
    );
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
