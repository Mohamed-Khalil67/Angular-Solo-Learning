import { Component, inject, OnInit } from '@angular/core';
import { RecipeList } from "./recipe-list/recipe-list";
import { RecipeDetails } from "./recipe-details/recipe-details";
import { Recipe } from './recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  imports: [RecipeList, RecipeDetails],
  selector: 'app-recipes',
  styleUrl: './recipes.scss',
  templateUrl: './recipes.html',
})
export class Recipes implements OnInit {
  selectedRecipe?: Recipe;

  private recipeService = inject(RecipeService);
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe:Recipe) => this.selectedRecipe = recipe);
    // the selectedRecipe will receive the recipe from the service that is sending an event recipe.
  }
}
