import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY, APP_ID } from './keys';
import { Recipe, Hit, RecipeResponse, Favorite } from './interfaces/recipe';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  edamamBaseUrl = 'https://api.edamam.com/search';
  favorites: Favorite[] = [];
  constructor(private http: HttpClient) {}

  getRecipes = (): any => {
    return this.http.get(this.edamamBaseUrl, {
      params: {
        app_key: API_KEY,
        app_id: APP_ID,
        q: 'brunch',
      },
    });
  };
  getRecipeSearch = (term: string, calories: string, diet: string) => {
    return this.http.get(this.edamamBaseUrl, {
      params: {
        app_key: API_KEY,
        app_id: APP_ID,
        q: term,
        calories: `0-${calories}`,
        diet: diet,
      },
    });
  };
  cleanRecipeSearch = (term: string) => {
    return this.http.get(this.edamamBaseUrl, {
      params: {
        app_key: API_KEY,
        app_id: APP_ID,
        q: term,
      },
    });
  };
  editFavorites = (favorite: Favorite): void => {
    let index = this.favorites.findIndex((item) => {
      return item.uri === favorite.uri;
    });
    if (index === -1) {
      this.favorites.push(favorite);
    } else {
      this.favorites.splice(index, 1);
    }
    console.log(this.favorites);
  };
  getFavorites = () => {
    return this.favorites;
  };
}
