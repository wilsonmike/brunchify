export interface Recipe {
  label: string;
  image: string;
}
export interface RecipeResponse {
  hits: Hit[];
}
export interface Hit {
  bookmarked: boolean;
  recipe: Recipe;
}
