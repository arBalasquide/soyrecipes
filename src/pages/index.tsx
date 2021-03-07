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

const Index = ({ allRecipesData }) => {
  return (
    <div>
      <h1>Recipes</h1>
      <br />
      {allRecipesData.map(({ id, title }) => (
        <Link href={recipesDir + id}>
          <a>
            <h2>{title}</h2>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Index;
