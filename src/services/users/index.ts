import { api } from "../api";

const getUser = async (user: string) => {
  const { data } = await api.get(`/${user}`);

  return data;
};

const getUserRepos = async (user: string) => {
  const { data } = await api.get(`/${user}/repos`);

  return data;
};

const getUserReposStarred = async (user: string) => {
  const { data } = await api.get(`/${user}/starred`);

  return data;
};

export { getUser, getUserRepos, getUserReposStarred };
