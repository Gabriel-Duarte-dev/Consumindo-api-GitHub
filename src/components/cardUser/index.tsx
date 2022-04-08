import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Img,
  Link,
  Skeleton,
  SkeletonCircle,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useContext } from "react";
import { RiGitRepositoryLine } from "react-icons/ri";
import { GiRoundStar } from "react-icons/gi";
import UserContext from "../../context";
import { useNavigate } from "react-router-dom";

export function CardUser(): JSX.Element {
  const { user, isLoaded } = useContext(UserContext);
  const navigate = useNavigate();
  const [smScreen] = useMediaQuery("(min-width:410px)");
  return (
    <Center w="100%" bg="#44475a" borderRadius="7px" p={3}>
      <Flex
        direction="column"
        align="center"
        display={Object.keys(user).length > 0 ? "initial" : "none"}
      >
        <Flex
          justify={{ base: "space-around", sm: "flex-start" }}
          align="center"
          mb={3}
        >
          <Flex
            order={{ base: 1, sm: 0 }}
            direction={{ base: "column", sm: "row" }}
            align="center"
          >
            <SkeletonCircle size="70px" isLoaded={isLoaded}>
              <Img
                src={user.avatar_url}
                alt="GitHub profile picture"
                borderRadius="50%"
              />
            </SkeletonCircle>

            <Skeleton isLoaded={isLoaded} m={{ base: 0, sm: "0 15px" }}>
              <Link
                href={user.html_url}
                color="#f8f8f8"
                fontSize={{ base: "sm", sm: "md" }}
                fontWeight="300"
              >
                {user.name}
              </Link>
            </Skeleton>
          </Flex>

          <Box mr={{ base: 0, sm: 3 }}>
            <Skeleton isLoaded={isLoaded}>
              <Flex direction="column" align="center">
                <Text fontSize={{ base: "sm", sm: "md" }} color="#f8f8f8">
                  Seguidores
                </Text>
                <Text fontSize="sm" color="#f8f8f8">
                  {user.followers}
                </Text>
              </Flex>
            </Skeleton>
          </Box>

          <Box order={{ base: 1, sm: 0 }}>
            <Skeleton isLoaded={isLoaded}>
              <Flex direction="column" align="center">
                <Text fontSize={{ base: "sm", sm: "md" }} color="#f8f8f8">
                  Seguindo
                </Text>
                <Text fontSize="sm" color="#f8f8f8">
                  {user.following}
                </Text>
              </Flex>
            </Skeleton>
          </Box>
        </Flex>

        <Skeleton isLoaded={isLoaded} mb={5}>
          <Text fontSize="sm" color="#f8f8f8">
            {user.bio}
          </Text>
        </Skeleton>

        <Stack direction={{ base: "column", sm: "row" }}>
          <Skeleton isLoaded={isLoaded}>
            <Button
              bg="#6272a4"
              size={smScreen ? "md" : "sm"}
              color="#f8f8f8"
              _hover={{ bg: "" }}
              _active={{ bg: "#4d5c8c" }}
              leftIcon={<RiGitRepositoryLine />}
              variant="solid"
              onClick={() => navigate(`/${user.login}/repos`)}
            >
              Repositórios
            </Button>
          </Skeleton>

          <Skeleton isLoaded={isLoaded}>
            <Button
              bg="#6272a4"
              size={smScreen ? "md" : "sm"}
              color="#f8f8f8"
              _hover={{ bg: "" }}
              _active={{ bg: "#4d5c8c" }}
              leftIcon={<GiRoundStar />}
              variant="solid"
              onClick={() => navigate(`/${user.login}/starred`)}
            >
              Repositórios mais visitados
            </Button>
          </Skeleton>
        </Stack>
      </Flex>
    </Center>
  );
}
