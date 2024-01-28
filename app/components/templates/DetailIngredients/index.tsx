import ContainerList from "@/app/components/atoms/ContainerList";
import CardLinkWithImage from "@/app/components/molecules/Card/WithImage";
import Heading from "@/app/components/atoms/Heading";

interface typeMeal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

interface typeIngredientsCategory {
  ingredientsCategory: {
    meals: typeMeal[];
  };
  result: string;
}

export const DetailIngredients = ({
  ingredientsCategory,
  result,
}: typeIngredientsCategory) => {
  return (
    <ContainerList>
      <div className="pb-10">
        <Heading variant="h1" classesName="p-10">
          List Ingredients By Category <b>&#34;{result}&#34;</b>
        </Heading>
        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {ingredientsCategory.meals.map((ingredient: any) => (
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
    </ContainerList>
  );
};
