import { Component, ElementRef, inject, OnInit, output, ViewChild } from '@angular/core';
import { ShoppingEdit } from './shopping-edit/shopping-edit';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  imports: [ShoppingEdit],
  selector: 'app-shopping-list',
  styleUrl: './shopping-list.scss',
  templateUrl: './shopping-list.html',
})
export class ShoppingList implements OnInit {
  ingredients: Ingredients[] = [];

  shoppingService = inject(ShoppingListService);
  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
  }
}
