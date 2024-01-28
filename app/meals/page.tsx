import { getMeals } from "@/app/services/apiMeals";
import Meals from "../components/templates/Meals";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;
  const meals = await getMeals(search);
  return <Meals search={search} meals={meals} />;
};

export default Page;
