import { Component, Input, OnInit } from '@angular/core';
import { Favorite, Recipe } from '../interfaces/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
})
export class FavoritesPageComponent implements OnInit {
  @Input() recipeRef: any;
  favorites: Favorite[] = [];
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.favorites = this.recipeService.getFavorites();
  }

  // deleteFavorite = (index: number) => {
  //   if (this.favorites) {
  //   }
  //   console.log(this.favorites);
  // };
}
