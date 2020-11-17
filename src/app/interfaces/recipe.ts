export interface Recipe {
  label: string;
  image: string;
  uri: string;
  favorite: boolean;
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
}
