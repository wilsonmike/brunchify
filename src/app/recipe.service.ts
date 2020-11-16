import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY, APP_ID } from './keys';
import { Recipe, Hit, RecipeResponse } from './interfaces/recipe';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  edamamBaseUrl = 'https://api.edamam.com/search';

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
  getRecipeSearch = (term: string, calories: string) => {
    return this.http.get(this.edamamBaseUrl, {
      params: {
        app_key: API_KEY,
        app_id: APP_ID,
        q: 'brunch ' + term,
        calories: `0-${calories}`,
      },
    });
  };
}
