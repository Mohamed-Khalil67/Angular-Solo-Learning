import { Component, inject, input, output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  imports: [],
  selector: 'app-recipe-item',
  styleUrl: './recipe-item.scss',
  templateUrl: './recipe-item.html',
})
export class RecipeItem {
  recipe = input.required<Recipe>();
  private recipeService = inject(RecipeService);

  onSelect(recipe: Recipe) {
    this.recipeService.recipeSelected.emit(recipe);
    console.log(recipe)
  }
}
