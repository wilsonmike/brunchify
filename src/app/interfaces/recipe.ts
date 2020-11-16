export interface Recipe {
  label: string;
  image: string;
  uri: string;
}
export interface RecipeResponse {
  hits: Hit[];
}
export interface Hit {
  bookmarked: boolean;
  recipe: Recipe;
}
