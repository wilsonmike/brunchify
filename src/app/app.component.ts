import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'brunchify';
  constructor(recipeService: RecipeService) {}
  ngOnInit() {}
}
