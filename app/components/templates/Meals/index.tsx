import Search from "@/app/components/molecules/Search";
import ContainerList from "@/app/components/atoms/ContainerList";
import ListMeal from "@/app/components/organisms/ListMeal";

interface typeItemMeal {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
  strInstructions: string;
  strArea: string;
  strCategory: string;
  strYoutube: string;
}

interface typeMeal {
  search?: string;
  meals: {
    meals: typeItemMeal[];
  };
}

const Meals = ({ search, meals }: typeMeal) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Search search={search} />
      <ContainerList>
        <ListMeal meals={meals} />
      </ContainerList>
    </div>
  );
};

export default Meals;
