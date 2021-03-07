import { Container, Text } from "@chakra-ui/layout";
import { getAllRecipesIds, getRecipeData } from "../../lib/getRecipes";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllRecipesIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const recipeData = await getRecipeData(params.id as string);
  return {
    props: {
      recipeData,
    },
  };
};

export default function Recipe({ recipeData }) {
  return (
    <Container>
      <Text fontSize="2.5em">{recipeData.title}</Text>
      <Text>
        ETA for Preparing and Cooking: <Text as="u">{recipeData.eta}</Text>
      </Text>
      <br />
      <div dangerouslySetInnerHTML={{ __html: recipeData.contentHtml }} />
    </Container>
  );
}
