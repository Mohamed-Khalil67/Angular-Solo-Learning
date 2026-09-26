import { Service } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Service()
export class ShoppingListService {
  ingredients: Ingredients[] = [
    new Ingredients('Apple', 100),
    new Ingredients('Pizza', 150),
    new Ingredients('Mango', 60),
  ];

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredient: Ingredients[]) {
    this.ingredients.push(...ingredient);
  }
}
