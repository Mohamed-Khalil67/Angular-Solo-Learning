import { Routes } from '@angular/router';
import { Recipes } from './recipes/recipes';
import { ShoppingList } from './shopping-list/shopping-list';
import { RecipeDetails } from './recipes/recipe-details/recipe-details';

export const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: Recipes,
    title: 'Recipes',
    children: [
      // Optional: You can create a RecipeStartComponent ("Please select a recipe") for path: ''
      { path: ':id', component: RecipeDetails, title: 'Recipe Details' },
      // Optional later: { path: 'new', component: RecipeEditComponent },
      // Optional later: { path: ':id/edit', component: RecipeEditComponent }
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingList,
    title: 'Shopping List',
  },
];
