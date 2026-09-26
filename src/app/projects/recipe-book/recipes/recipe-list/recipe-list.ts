import { Component, inject, OnInit, output } from '@angular/core';
import { RecipeItem } from "./recipe-item/recipe-item";
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  imports: [RecipeItem],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.scss',
  templateUrl: './recipe-list.html',
})
export class RecipeList implements OnInit {
  recipeService = inject(RecipeService);
  recipes: Recipe[] = [];

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes);
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  //   console.log(recipe);
  // }
}
