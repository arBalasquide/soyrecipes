import { Container, Link, Text } from "@chakra-ui/layout";
import { GetStaticProps } from "next";
import { getRecipesData } from "../lib/getRecipes";

const recipesDir = "/recipes/";

export const getStaticProps: GetStaticProps = async () => {
  const allRecipesData = getRecipesData();
  return {
    props: {
      allRecipesData,
    },
  };
};

/ TODO: Type data: id, date, title, eta into a recipe type
const Index = ({ allRecipesData }) => {
  return (
    <Container>
      <Text>Recipes</Text>
      <br />
      <ul>
        {allRecipesData.map(({ id, date, title, eta }) => (
          <li key={id}>
            <Link href={recipesDir + id}>{title}</Link>
            <br />
            Eta: {eta}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Index;
