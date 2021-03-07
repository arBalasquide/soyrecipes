import fs from "fs";
import path from "path";
import matter from "gray-matter";
import html from "remark-html";
import remark from "remark";

const recipesDir = path.join(process.cwd(), "src/recipes");

const getRecipesData = () => {
  const fileNames = fs.readdirSync(recipesDir);

  const allRecipesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(recipesDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      ...matterResult.data,
      id,
    };
  });

  return allRecipesData;
};

const getRecipeData = async (id: string) => {
  const fullPath = path.join(recipesDir, `${id}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedData = await remark().use(html).process(matterResult.content);

  const contentHtml = processedData.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
};

const getAllRecipesIds = () => {
  const fileNames = fs.readdirSync(recipesDir);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
};

export { getAllRecipesIds, getRecipeData, getRecipesData };
