import { Input, IconButton, Flex, useToast } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import UserContext from "../../context";
import {
  getUser,
  getUserRepos,
  getUserReposStarred,
} from "../../services/users";

export function SearchBox(): JSX.Element {
  const [findUser, setFindUser] = useState<string>("");
  const { setUser, setUserRepos, setUserReposStarred, setIsLoaded } =
    useContext(UserContext);
  const toast = useToast();

  async function searchUser() {
    setIsLoaded(false);
    try {
      const resUser = await getUser(findUser);
      const resUserRepos = await getUserRepos(findUser);
      const resUserReposStarred = await getUserReposStarred(findUser);
      setUser(resUser);
      setUserRepos(resUserRepos);
      setUserReposStarred(resUserReposStarred);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
      setIsLoaded(true);
      toast({
        title: "Usuário não econtrado",
        description: "Este usuário não existe...",
        status: "error",
        duration: 2500,
        isClosable: true,
        position: "bottom-left",
      });
    }
  }

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      bg="#6272a4"
      w="100%"
      minH="100px"
      borderRadius="7px"
      mb={2}
    >
      <Flex w="100%" justify="center" align="center">
        <Input
          type="text"
          w="80%"
          color="#f8f8f8"
          borderColor="#44475a"
          _hover={{ borderColor: "#282a36" }}
          focusBorderColor="#282a36"
          mr={2}
          onChange={(e) => setFindUser(e.target.value)}
        />
        <IconButton
          bg="#44475a"
          _hover={{ bg: "#282a36" }}
          _active={{ bg: "#44475a" }}
          aria-label="Search users"
          color="#f8f8f8"
          icon={<AiOutlineSearch />}
          onClick={searchUser}
        />
      </Flex>
    </Flex>
  );
}
