import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CardUserRepos } from "../../components/cardUserRepos";
import { Layout } from "../../components/Layout";
import { ReposContainer } from "../../components/reposContainer";
import UserContext from "../../context";

function ReposStarred(): JSX.Element {
  const { user, userReposStarred } = useContext(UserContext);
  return (
    <Layout>
      <ReposContainer title={user.name}>
        {userReposStarred.length > 0 ? (
          userReposStarred.map((repo) => {
            return (
              <CardUserRepos
                key={repo.id}
                name={repo.name}
                description={repo.description}
                language={repo.language}
                created_at={repo.created_at}
                pushed_at={repo.pushed_at}
              />
            );
          })
        ) : (
          <Text fontSize="md" color="#f8f8f8">
            Sem atividade recente...
          </Text>
        )}
      </ReposContainer>
    </Layout>
  );
}

export default ReposStarred;
