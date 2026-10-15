import { Component, inject, input, output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../services/recipe.service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-recipe-item',
  styleUrl: './recipe-item.scss',
  templateUrl: './recipe-item.html',
})
export class RecipeItem {
  recipe = input.required<Recipe>();
  index = input.required<number>();

  private recipeService = inject(RecipeService);

}
