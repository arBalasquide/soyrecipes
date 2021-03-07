import { Container } from "@chakra-ui/layout";
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
      {recipeData.title}
      <br />
      {recipeData.id}
      <br />
      {recipeData.date}
      <div dangerouslySetInnerHTML={{ __html: recipeData.contentHtml }} />
    </Container>
  );
}
