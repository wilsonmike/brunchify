export interface Recipe {
  label: string;
  image: string;
  uri: string;
  favorite: boolean;
  url: string;
  ingredientLines: string;
  totalTime: number;
}
export interface RecipeResponse {
  hits: Hit[];
}
export interface Hit {
  bookmarked: boolean;
  recipe: Recipe;
}
export interface Favorite {
  label: string;
  image: string;
  uri: string;
  favorite: boolean;
  url: string;
  ingredientLines: string;
  totalTime: number;
}
