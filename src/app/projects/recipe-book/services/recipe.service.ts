import { Service, inject, output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Service()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'A super-tasty Schnitzel - just awesome!', 'assets/schnitzel.png', [
      new Ingredients('ing1', 10),
      new Ingredients('ing2', 10),
    ]),
    new Recipe('Big Fat Burger', 'What else you need to say?', 'assets/burger.png', [
      new Ingredients('ing3', 10),
      new Ingredients('ing4', 10),
    ]),
    new Recipe('Margherita Pizza', 'Classic Italian pizza with fresh basil.', 'assets/pizza.png', [
      new Ingredients('ing4', 10),
      new Ingredients('ing5', 10),
    ]),
  ];
  shoppingListService = inject(ShoppingListService);

  recipeSelected = new EventEmitter<Recipe>();
  getRecipes() {
    return this.recipes;
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
