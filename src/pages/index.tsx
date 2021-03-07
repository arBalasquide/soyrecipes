import { Center, Container, Text, Link as ChakraLink } from "@chakra-ui/layout";
import Link from "next/link";
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

// TODO: Type data: id, date, title, eta into a recipe type
const Index = ({ allRecipesData }) => {
  return (
    <>
      <Center>
        <Text fontSize="2em">Recipes</Text>
      </Center>
      <Container>
        <br />
        <ul>
          {allRecipesData.map(({ id, date, title, _eta }) => (
            <li key={id}>
              <Link href={recipesDir + id}>
                <a>
                  <Text as="u">{title}</Text>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Index;
