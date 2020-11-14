import { Injectable } from '@angular/core';
import { API_KEY, APP_ID } from '../keys';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {
    console.log(API_KEY);
    console.log(APP_ID);
  }
}
