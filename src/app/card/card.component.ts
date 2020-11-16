import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() recipeRef: any;
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
}
