import Search from "@/app/components/molecules/Search";
import ListFilterIngredient from "@/app/components/organisms/ListFilterIngredient";
import ContainerList from "@/app/components/atoms/ContainerList";
import Heading from "@/app/components/atoms/Heading";
import List from "@/app/components/organisms/ListIngredient";
import NotFound from "@/app/components/molecules/NotFound";

interface typeMeal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

interface typeIngredients {
  search?: string;
  ingredients: {
    meals: typeMeal[];
  };
}

const Ingredients = ({ search, ingredients }: typeIngredients) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Search search={search} />
      <ContainerList>
        {!search && (
          <div className="py-4 sm:py-10">
            <Heading variant="h1">List Ingredients</Heading>
            <div className="px-0 sm:px-10">
              <Heading variant="h2">Ingredient Information</Heading>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Personal name and description.
              </p>
            </div>
            <div className="mt-6">
              <List ingredients={ingredients} />
            </div>
          </div>
        )}
        {search && (
          <div className="pb-10">
            <Heading variant="h1">
              List Ingredients By Filter Data <b>&#34;{search}&#34;</b>
            </Heading>
            {ingredients.meals ? (
              <ListFilterIngredient ingredients={ingredients} />
            ) : (
              <NotFound />
            )}
          </div>
        )}
      </ContainerList>
    </div>
  );
};

export default Ingredients;
