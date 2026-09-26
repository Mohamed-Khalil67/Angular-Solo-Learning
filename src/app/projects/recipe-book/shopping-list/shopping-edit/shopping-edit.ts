import { Component, ElementRef, inject, output, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  imports: [],
  selector: 'app-shopping-edit',
  styleUrl: './shopping-edit.scss',
  templateUrl: './shopping-edit.html',
})
export class ShoppingEdit {
  @ViewChild('nameInput', { static: true }) nameRef?: ElementRef;
  @ViewChild('amountInput', { static: true }) amountRef?: ElementRef;

  shoppingListService = inject(ShoppingListService);
  // ingredientAdded = output<Ingredients>();

  onAddItem() {
    const ingredient = new Ingredients(
      this.nameRef?.nativeElement.value,
      this.amountRef?.nativeElement.value,
    );
    this.shoppingListService.addIngredient(ingredient);
  }
}
