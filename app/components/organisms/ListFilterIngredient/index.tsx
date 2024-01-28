import React from "react";
import CardLinkWithImage from "@/app/components/molecules/Card/WithImage";

interface typeMeal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

interface typeIngredients {
  ingredients: {
    meals: typeMeal[];
  };
}

const ListFilterIngredient = ({ ingredients }: typeIngredients) => {
  console.log("ingredients", ingredients);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {ingredients.meals.map((ingredient: any) => (
            <CardLinkWithImage
              key={ingredient.idMeal}
              variant="cardOne"
              className="p-4 sm:p-6"
              url={`/meals/${ingredient.idMeal}`}
              img={ingredient.strMealThumb}
              alt={`img-${ingredient.idMeal}`}
              title={ingredient.strMeal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListFilterIngredient;
