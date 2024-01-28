import { getIngredients } from "@/app/services/apiIngrediets";
import { convertStringUrlWithCamel } from "@/app/utils";
import { DetailIngredients } from "@/app/components/templates/DetailIngredients";

const Page = async ({ params }: { params: { category: string[] } }) => {
  if (params.category[1]) {
    const result: string = convertStringUrlWithCamel(params.category[1]);
    const ingredientsCategory = await getIngredients(result);
    return (
      <DetailIngredients
        ingredientsCategory={ingredientsCategory}
        result={result}
      />
    );
  }
  return <div>Page Category</div>;
};

export default Page;
