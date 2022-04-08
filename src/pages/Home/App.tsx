import { Flex } from "@chakra-ui/react";
import { CardUser } from "../../components/cardUser";
import { Layout } from "../../components/Layout";
import { SearchBox } from "../../components/searchBox";

function App(): JSX.Element {
  return (
    <Layout>
      <Flex as="main" minW={{ base: "300px", md: "350px" }} direction="column">
        <SearchBox />
        <CardUser />
      </Flex>
    </Layout>
  );
}

export default App;
