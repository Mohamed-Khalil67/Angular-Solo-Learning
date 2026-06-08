import { Component, computed, signal } from '@angular/core';

export interface product {
  name: string;
  stock: number;
  price: number;
}

export interface BasketItem {
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  qtyAvailable = signal<product[]>([
    { name: 'bread', stock: 15, price: 2.5 },
    { name: 'tomato', stock: 20, price: 1.0 },
    { name: 'lettuce', stock: 10, price: 3.0 },
  ]);
  selectedName = signal<string | null>('');
  selectedItem = computed(() => {
    return this.qtyAvailable().find((i) => i.name === this.selectedName());
  });
  quantity = signal<number>(0);
  basket = signal<BasketItem[]>([]);
  totalPrice = computed(() => {
    return this.basket().reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  });

  constructor() {
    // console.log(this.basket());
  }

  onSelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedName.set(value);
    // console.log(value);
  }

  onQuantity(event: Event) {
    const value = parseInt((event.target as HTMLInputElement).value);
    this.quantity.set(value);
  }

  onAddToCart() {
    const itemSelected = this.selectedItem();
    const qtyPicked = this.quantity();
    if (!itemSelected) return; // guard if nothing selected
    if (qtyPicked <= 0) return; // no quantity picked
    if (itemSelected.stock === 0) return;
    if (qtyPicked > itemSelected.stock) return;
    const existItem = this.basket().find((i) => i.name === itemSelected?.name);

    if (existItem) {
      this.basket.update((current) =>
        current.map((i) =>
          i.name === itemSelected.name ? { ...i, quantity: i.quantity + qtyPicked } : i,
        ),
      );
    } else {
      this.basket.update((current) => [...current, { ...itemSelected, quantity: qtyPicked }]);
    }
    // update get the current value and update it basicaly
    this.qtyAvailable.update((current) =>
      current.map((i) =>
        i.name === itemSelected.name
          ? { ...i, stock: itemSelected.stock - qtyPicked } // what goes here?
          : i,
      ),
    );
    console.log(this.basket());
  }
}
