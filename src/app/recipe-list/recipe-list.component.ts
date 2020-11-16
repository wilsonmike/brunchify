import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Hit, Recipe, RecipeResponse } from '../interfaces/recipe';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  index: number;
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeService
      .getRecipes()
      .subscribe((recipeResponse: RecipeResponse) => {
        this.recipes = recipeResponse.hits.map((hit: Hit) => hit.recipe);
        console.log(this.recipes);
      });
  }
  //
  search = (term: string) => {
    this.router.navigate([`/recipe-list`], {
      queryParams: {
        term: term,
      },
    });
    console.log(term);
  };
  //
  isShow = false;
  toggleDisplay(index: number) {
    if (index === index) {
      this.isShow = !this.isShow;
    } else {
      this.isShow = this.isShow;
    }
    console.log(index);
  }
}
