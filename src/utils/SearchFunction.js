
export const filterNutritionsByNutritionValue = (nutritions, searchText) => {
  return searchText === ''
    ? nutritions
    : filterNutritionsByValue(nutritions, searchText);
};
const filterNutritionsByValue = (fruits, searchedNutrition) => {
  return fruits.filter((fruit) =>
    matchAllSearchedNutritions(fruit.nutritions, searchedNutrition)
  );
};

const matchAllSearchedNutritions = (nutritions, searchedNutrition) => {
  return matchSearchedIngredient(searchedNutrition, nutritions);
  
};

const matchSearchedIngredient = (
  searchedNutrition,
  nutritions
) => {    
    let keyValues=Object.values(nutritions);   
    return keyValues.some(
      nutrition =>  matchIngredient(nutrition, searchedNutrition)  
        );
   
};

const matchIngredient = (nutrition, searchedNutrition) => {
  return nutrition.toString().indexOf(searchedNutrition.toString()) >= 0;
};
