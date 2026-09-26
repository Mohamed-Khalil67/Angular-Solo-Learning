import { Component, ElementRef, inject, input, signal, viewChild } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  imports: [],
  selector: 'app-recipe-details',
  styleUrl: './recipe-details.scss',
  templateUrl: './recipe-details.html',
  host: {
    '(document:click)': 'closeManageOnOutsideClick($event)',
    '(document:keydown.escape)': 'manageOpen.set(false)',
  },
})
export class RecipeDetails {
  recipe = input<Recipe>();

  recipeService = inject(RecipeService);

  // Menu state (replaces Bootstrap's dropdown JavaScript)
  manageOpen = signal(false);
  private manage = viewChild.required<ElementRef<HTMLElement>>('manage');

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe()!.ingredients);
  }

  closeManageOnOutsideClick(event: MouseEvent) {
    if (!this.manage().nativeElement.contains(event.target as Node)) {
      this.manageOpen.set(false);
    }
  }
}
