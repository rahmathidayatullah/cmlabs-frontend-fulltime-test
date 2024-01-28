import VideoPlayer from "@/app/components/atoms/Video";
import Heading from "@/app/components/atoms/Heading";
import CardLinkWithImage from "@/app/components/molecules/Card/WithImage";

interface typeItemMeal {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
  strInstructions: string;
  strArea: string;
  strCategory: string;
  strYoutube: string;
}

interface typeDetailMeals {
  meals: {
    meals: typeItemMeal[];
  };
  params: {
    id: string;
  };
}

const DetailMeals = ({ meals, params }: typeDetailMeals) => {
  return (
    <div className="p-0 sm:p-10">
      <ul>
        {meals.meals.map((meal: any) => (
          <li key={meal.idMeal}>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-6">
                <Heading variant="h1">
                  Meal details by id &#34;<b>{params.id}</b>&#34;
                </Heading>
                <CardLinkWithImage
                  variant="cardTwo"
                  url={`/meals/${meal.idMeal}`}
                  img={meal.strMealThumb}
                  alt={`img-${meal.idMeal}`}
                  title={meal.strMeal}
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <Heading variant="h1">Videos</Heading>
                <VideoPlayer src={meal.strYoutube} />
              </div>
            </div>
            <div className="overflow-hidden bg-white shadow sm:rounded-lg mt-5">
              <div className="px-1 py-6 sm:px-6">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Information Detail
                </h3>
              </div>
              <div className="border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      {meal.strIngredient1}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {meal.strMeasure1}
                    </dd>
                  </div>
                  <div className="px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      {meal.strIngredient2}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {meal.strMeasure2}
                    </dd>
                  </div>
                  <div className="px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      {meal.strIngredient3}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {meal.strMeasure3}
                    </dd>
                  </div>
                  <div className="px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      {meal.strIngredient4}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {meal.strMeasure4}
                    </dd>
                  </div>
                  <div className="px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      {meal.strIngredient5}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {meal.strMeasure5}
                    </dd>
                  </div>
                  <div className="px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      {meal.strIngredient6}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {meal.strMeasure6}
                    </dd>
                  </div>
                  <div className="px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      {meal.strIngredient7}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {meal.strMeasure7}
                    </dd>
                  </div>
                  <div className="px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      {meal.strIngredient8}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {meal.strMeasure8}
                    </dd>
                  </div>
                  <div className="px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      {meal.strIngredient9}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {meal.strMeasure9}
                    </dd>
                  </div>
                  <div className="px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      Intructions
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {meal.strInstructions}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailMeals;
