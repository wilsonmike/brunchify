import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Hit, Recipe, RecipeResponse } from '../interfaces/recipe';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  index: number;
  recipeData: any;
  cal: string = '';
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response) => {
      let queryParams = response;
      console.log(queryParams);
      let calories = queryParams.get('calories');
      let term = queryParams.get('term');
      let diet = queryParams.get('diet');
      if (queryParams.get('term') === null) {
        this.recipeService.getRecipes().subscribe((response) => {
          this.recipeData = response;
          console.log(this.recipeData);
        });
      } else if (diet === '' || diet === null || calories === null) {
        this.recipeService.cleanRecipeSearch(term).subscribe((response) => {
          this.recipeData = response;
          console.log(this.recipeData);
        });
      } else {
        this.recipeService
          .getRecipeSearch(term, calories, diet)
          .subscribe((response) => {
            this.recipeData = response;
            console.log(this.recipeData);
          });
      }
    });
  }

  // ngOnInit(): void {
  //   this.recipeService
  //     .getRecipes()
  //     .subscribe((recipeResponse: RecipeResponse) => {
  //       this.recipes = recipeResponse.hits.map((hit: Hit) => hit.recipe);
  //       this.recipeData = recipeResponse.hits.map((hit: Hit) => hit.recipe);
  //       console.log(this.recipeData);
  //     });
  // }

  search = (term: string, cal: string, diet: string) => {
    this.router.navigate([`/recipe-list`], {
      queryParams: {
        term: term,
        calories: cal,
        diet: diet,
      },
    });
    console.log(term);
    console.log(cal);
    console.log(diet);
  };
  toggleFavorite = (favorite: Recipe): void => {
    this.recipeService.editFavorites(favorite);
  };
}
