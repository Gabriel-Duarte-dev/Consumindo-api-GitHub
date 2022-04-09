import React, { createContext, useState } from "react";

type UserDTO = {
  login?: string;
  id?: number;
  avatar_url?: string;
  name?: string;
  bio?: string;
  followers?: number;
  following?: number;
};

type UserReposDTO = {
  id: number;
  name: string;
  description: string;
  created_at: string;
  pushed_at: string;
  language: string;
};

type PropsUserContext = {
  user: UserDTO;
  setUser: React.Dispatch<React.SetStateAction<UserDTO>>;
  userRepos: UserReposDTO[] | [];
  setUserRepos: React.Dispatch<React.SetStateAction<UserReposDTO[] | []>>;
  userReposStarred: UserReposDTO[] | [];
  setUserReposStarred: React.Dispatch<
    React.SetStateAction<UserReposDTO[] | []>
  >;
  isLoaded: boolean;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
};

const DEFAULT_VALUE = {
  user: {},
  setUser: () => {},
  userRepos: [],
  setUserRepos: () => {},
  userReposStarred: [],
  setUserReposStarred: () => {},
  isLoaded: true,
  setIsLoaded: () => {},
};

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(DEFAULT_VALUE.user);
  const [userRepos, setUserRepos] = useState<UserReposDTO[] | []>(
    DEFAULT_VALUE.userRepos
  );
  const [userReposStarred, setUserReposStarred] = useState<UserReposDTO[] | []>(
    DEFAULT_VALUE.userRepos
  );
  const [isLoaded, setIsLoaded] = useState(DEFAULT_VALUE.isLoaded);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userRepos,
        setUserRepos,
        userReposStarred,
        setUserReposStarred,
        isLoaded,
        setIsLoaded,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
