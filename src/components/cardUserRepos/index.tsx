import { Box, Flex, Heading, HStack, Tag, Text } from "@chakra-ui/react";

type CardUserReposProps = {
  name: string;
  description: string;
  language: string;
  created_at: string;
  pushed_at: string;
};

export function CardUserRepos({
  name,
  description,
  language,
  created_at,
  pushed_at,
}: CardUserReposProps): JSX.Element {
  return (
    <Flex
      direction="column"
      w={{ base: "290px", sm: "400px" }}
      bg="#6272A4"
      borderRadius="5px"
      p={2}
      m="10px 0"
    >
      <Box w="100%" borderBottom="1px solid #282A36" mb={1}>
        <Heading fontSize="lg" fontWeight="400" color="#f8f8f8">
          {name}
        </Heading>
      </Box>

      <Text fontSize="14px" color="#f8f8f8" mb={4}>
        {description}
      </Text>

      <HStack mb={4}>
        <Text fontSize="14px" color="#f8f8f8">
          Linguagem:
        </Text>
        <Tag bg="#FF79C6" color="#f8f8f8" size="md">
          {language}
        </Tag>
      </HStack>

      <HStack>
        <Text fontSize="12px" color="#f8f8f8">
          Criado em: {created_at.split("T")[0].split("-").reverse().join("/")}
        </Text>
        <Text fontSize="12px" color="#f8f8f8">
          Última atualização:{" "}
          {pushed_at.split("T")[0].split("-").reverse().join("/")}
        </Text>
      </HStack>
    </Flex>
  );
}
