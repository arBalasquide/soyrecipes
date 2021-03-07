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
    <div>
      <h1>{recipeData.title}</h1>
      <h4>
        ETA for Preparing and Cooking: <p>{recipeData.eta}</p>
      </h4>
      <br />
      <div dangerouslySetInnerHTML={{ __html: recipeData.contentHtml }} />
    </div>
  );
}
