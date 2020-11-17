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
  index = 0;
  deleteFavorite = (favorite: Favorite) => {
    let index = this.favorites.findIndex((item) => {
      return item.uri === favorite.uri;
    });
    console.log(index);
    if (index != -1) {
      this.favorites.splice(index, 1);
      console.log(index);
      console.log(this.favorites);
    }
  };
}
