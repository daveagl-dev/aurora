import { Injectable, computed, inject, signal } from '@angular/core';
import { FREE_SHIPPING_THRESHOLD, PRODUCTS } from '../data/mock-data';
import { CartItem, ColorOption, Product } from '../models';
import { ToastService } from './toast.service';
import { UiService } from './ui.service';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly toast = inject(ToastService);
  private readonly ui = inject(UiService);

  readonly freeShippingThreshold = FREE_SHIPPING_THRESHOLD;

  readonly items = signal<CartItem[]>([
    { product: PRODUCTS[0], color: PRODUCTS[0].colors[0], size: 'M', quantity: 1 },
    { product: PRODUCTS[2], color: PRODUCTS[2].colors[0], size: 'One Size', quantity: 1 },
  ]);

  readonly count = computed(() => this.items().reduce((total, i) => total + i.quantity, 0));
  readonly subtotal = computed(() => this.items().reduce((total, i) => total + i.product.price * i.quantity, 0));
  readonly shippingProgress = computed(() => Math.min((this.subtotal() / this.freeShippingThreshold) * 100, 100));

  add(product: Product, color: ColorOption = product.colors[0], size: string = product.sizes[0], qty = 1): void {
    this.items.update(items => {
      const idx = items.findIndex(
        i => i.product.id === product.id && i.color.name === color.name && i.size === size,
      );
      if (idx > -1) {
        return items.map((item, n) => (n === idx ? { ...item, quantity: item.quantity + qty } : item));
      }
      return [...items, { product, color, size, quantity: qty }];
    });
    this.toast.show(`Added "${product.name}" to your shopping bag.`);
    this.ui.isCartOpen.set(true);
  }

  updateQty(index: number, delta: number): void {
    this.items.update(items => {
      const newQty = items[index].quantity + delta;
      if (newQty <= 0) return items.filter((_, n) => n !== index);
      return items.map((item, n) => (n === index ? { ...item, quantity: newQty } : item));
    });
  }

  remove(index: number): void {
    this.updateQty(index, -this.items()[index].quantity);
  }
}
