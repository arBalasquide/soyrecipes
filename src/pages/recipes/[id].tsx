import { getAllRecipesIds, getRecipeData } from "../../lib/getRecipes";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";

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
      <Link href="/">
        <button className="home">Home</button>
      </Link>
      <h1>{recipeData.title}</h1>
      <h4>ETA for Preparing and Cooking: {recipeData.eta}</h4>
      <div dangerouslySetInnerHTML={{ __html: recipeData.contentHtml }} />
    </div>
  );
}
