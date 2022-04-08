import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

type ReposContainerProps = {
  title?: string;
  children: ReactNode;
};

export function ReposContainer({
  title,
  children,
}: ReposContainerProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <Flex
      w={{ base: "300px", sm: "450px" }}
      maxH="650px"
      overflowY="auto"
      overflowX="hidden"
      p="20px"
      bg="#44475a"
      borderRadius="7px"
      direction="column"
      align="center"
      pos="relative"
    >
      <Icon
        pos="absolute"
        top="5px"
        left="7px"
        as={BiArrowBack}
        color="#f8f8f8"
        fontSize="18px"
        transition="0.3s"
        cursor="pointer"
        _hover={{ transform: "translateX(-3px)" }}
        onClick={() => navigate("/")}
      />
      <Heading fontSize="lg" color="#f8f8f8">
        {title}
      </Heading>
      {children}
    </Flex>
  );
}
