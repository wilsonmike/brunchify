import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Favorite, Recipe } from '../interfaces/recipe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() recipeRef: any;
  @Output() heartEvent = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit(): void {
    // toggleDisplay(index: number) {
    //   if (index === index) {
    //     this.isShow = !this.isShow;
    //   } else {
    //     this.isShow = this.isShow;
    //   }
    //   console.log(index);
    // }
  }
  roundCalories = (): number => {
    return Math.round(
      this.recipeRef.recipe.calories / this.recipeRef.recipe.yield
    );
  };
  isFavorite = false;
  toggleFavorite = (recipe: Favorite) => {
    let favorite: Favorite = {
      label: recipe.label,
      image: recipe.image,
      uri: recipe.uri,
      favorite: true,
      url: recipe.url,
      ingredientLines: recipe.ingredientLines,
      totalTime: recipe.totalTime,
    };
    this.heartEvent.emit(favorite);
    console.log(favorite);
    this.isFavorite = true;
  };
  isShow = false;

  toggleFave = () => {
    if (this.recipeRef === this.isFavorite) {
      this.isFavorite = !this.isShow;
    } else {
      this.isShow = this.isShow;
    }
  };

  toggleDisplay(index: number) {
    if (index === index) {
      this.isShow = !this.isShow;
    } else {
      this.isShow = this.isShow;
    }
    console.log(index);
  }
  // ingredients = document.querySelector('.recipe-paragraph');
  // completeList = this.ingredients.split(",").join("\n");
}
