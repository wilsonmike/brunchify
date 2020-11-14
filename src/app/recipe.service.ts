import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY, APP_ID } from '../keys';
import { Observable } from 'rxjs';
import { Recipe, Hit, RecipeResponse } from './interfaces/recipe';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  edamamBaseUrl = 'https://api.edamam.com/search';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<RecipeResponse> {
    return this.http.get<RecipeResponse>(this.edamamBaseUrl, {
      params: {
        app_key: API_KEY,
        app_id: APP_ID,
        q: 'brunch',
      },
    });
  }
}
