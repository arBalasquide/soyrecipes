import Link from "next/link";

const SubmitRecipe = () => {
  return (
    <div>
      <Link href="/">
        <button className="home">Home</button>
      </Link>
      <p>
        Read{" "}
        <a href="https://github.com/arBalasquide/soyrecipes#submitting-a-recipe-to-this-repo">
          this
        </a>{" "}
        and follow the instructions for submitting a pull request. However, if
        you do not posses a Github account nor the technical skills, you may
        email me your recipe at: ar AT balasquide DOT xyz
      </p>
    </div>
  );
};

export default SubmitRecipe;