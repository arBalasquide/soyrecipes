# soyrecipes

# How to create a recipe

All recipes are stored inside `src/recipes/` as a markdown file where the name of the file is the _unique_ ID of the recipe.
On build time for the server, it generates routes based on the ID of the recipe in order to server static files.

Lets say we have an example recipe called `example.md`:

```
---
title: 'Example Recipe'
date: '2021-03-07'
eta: '40 mins'
---

An example recipe in markdown
```

The server on build time will generate a route as `recipes/example` where it will serve the static HTML for that markdown file.
Moreover, if you want to use images in your markdown file you would have to place them in the `public/images/` folder in the root of the project in a folder with the ID of your recipe.

E.g in our example it'll be `public/images/example/example.png` and from our markdown file we can access it as `![example](/images/example/example.png)`

# How to run the server

1. yarn install
2. yarn build
3. yarn start

That's it! For development, ignore the `build`/`start` commands and just run `yarn dev`. You can install yarn globally with `npm i yarn --global`. Otherwise, you can replace yarn with `npm run`.

There's an [official website](https://soy.recipes) that hosts this recipe book implemented with continous integration. Every pull request that ends up in master will automatically be built and deployed onto the website. 

# Submitting a recipe to this repo

## Approval Constraints

- Page must be less than 1MB (total size, not transferred).
- Follows proper markdown styles.
- No backstories or anything off-topic, just says how to do the recipe and any tips or recommendation.

Make a pull request to put your .md recipe and any images in the `public/images/` folder and it will be reviewed, and if approved, added to the repo.

Of course, you can host this yourself if you do not like my standards for the recipes.
