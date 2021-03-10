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
    <div className="container">
      <div className="nav">
        <span className="nav">
          <span className="listing">1</span>{" "}
          <Link href="/submit">Submitting</Link>
        </span>
        <span className="nav">
          <span className="listing">2</span>{" "}
          <Link href="https://github.com/arBalasquide/soyrecipes">Github</Link>
        </span>
        <span className="nav">
          <span className="listing">3</span> <Link href="/donate">Donate</Link>
        </span>
      </div>
      <h1>🍴 Open Source Recipes</h1>
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
