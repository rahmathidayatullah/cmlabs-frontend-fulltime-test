import Heading from "@/app/components/atoms/Heading";
import NotFound from "@/app/components/molecules/NotFound";
import CardLinkWithImage from "@/app/components/molecules/Card/WithImage";

interface typeItemMeal {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
  strInstructions: string;
  strArea: string;
  strCategory: string;
}

interface typeMeals {
  meals: {
    meals: typeItemMeal[] | null;
  };
}

const ListMeal = ({ meals }: typeMeals) => {
  return (
    <div className="py-4 sm:py-10">
      <Heading variant="h1">List Meal</Heading>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {meals.meals ? (
            meals.meals.map((meal: any) => (
              <CardLinkWithImage
                key={meal.idMeal}
                variant="cardTwo"
                url={`/meals/${meal.idMeal}`}
                img={meal.strMealThumb}
                alt={`img-${meal.idMeal}`}
                title={meal.strMeal}
              />
            ))
          ) : (
            <NotFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default ListMeal;
