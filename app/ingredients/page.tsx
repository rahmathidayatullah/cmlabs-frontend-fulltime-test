import { getIngredients } from "@/app/services/apiIngrediets";
import TIngredients from "@/app/components/templates/Ingredients";

const Ingredients = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;
  const ingredients = await getIngredients(search);
  return <TIngredients search={search} ingredients={ingredients} />;
};

export default Ingredients;
