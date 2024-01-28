import { getMealDetail } from "@/app/services/apiMeals";
import DetailMeals from "@/app/components/templates/DetailMeals";

export default async function Page({ params }: { params: { id: string } }) {
  const meals = await getMealDetail(params.id);
  return <DetailMeals meals={meals} params={params} />;
}
