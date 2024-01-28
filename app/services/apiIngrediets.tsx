// List all Ingredients
export async function getIngredients(search?: string) {
  const host = "https://www.themealdb.com/api/json/v1/1/";
  let url = host + "list.php?i=list";
  if (search) {
    url = host + `filter.php?i=${search}`;
  }
  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// Filter by main ingredient
export async function getIngredientsFilter() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=chicken_breast"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
