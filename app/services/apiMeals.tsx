// List all Ingredients
export async function getMealDetail(id: string) {
  const host = "https://www.themealdb.com/api/json/v1/1/lookup.php";
  const url = host + `?i=${id}`;
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getMeals(search?: string) {
  const host = "https://www.themealdb.com/api/json/v1/1/search.php";
  let url = host + "?f=a";
  if (search) {
    url = host + `?s=${search}`;
  }
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
