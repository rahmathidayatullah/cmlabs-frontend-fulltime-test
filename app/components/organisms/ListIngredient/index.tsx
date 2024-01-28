import Card from "@/app/components/molecules/Card";
import { convertStringUrlWithDash } from "@/app/utils";

interface typeOfIngredient {
  idIngredient?: string;
  strIngredient: string;
  strDescription?: string;
  strType?: string;
}

const List = ({ ingredients }: any) => {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {ingredients.meals.map((ingredient: typeOfIngredient) => (
        <Card
          title={ingredient.strIngredient}
          key={ingredient.idIngredient}
          description={ingredient.strDescription ?? "No description"}
          variant="CardOne"
          className="px-0 sm:px-10 py-6 sm:col-span-1"
          url={`/ingredients/category/${convertStringUrlWithDash(
            ingredient.strIngredient
          )}`}
        />
      ))}
    </dl>
  );
};

export default List;
