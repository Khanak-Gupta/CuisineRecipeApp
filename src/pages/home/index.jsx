import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading)
    return (
      <div className="text-white text-center py-10 text-2xl">
        Loading... Please wait!
      </div>
    );

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item, index) => <RecipeItem key={index} item={item} />)
      ) : (
        <div className="w-full text-center mt-20">
          <p className="lg:text-4xl text-xl text-white font-extrabold shadow-md">
Hungry for something? Search for a dish above!
          </p>
        </div>
      )}
    </div>
  );
}
