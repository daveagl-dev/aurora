import { Injectable, computed, inject, signal } from '@angular/core';
import { PRODUCTS } from '../data/mock-data';
import { ToastService } from './toast.service';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private readonly toast = inject(ToastService);

  readonly ids = signal<string[]>(['aura-102', 'aura-108']);
  readonly count = computed(() => this.ids().length);
  readonly products = computed(() => PRODUCTS.filter(p => this.ids().includes(p.id)));

  has(productId: string): boolean {
    return this.ids().includes(productId);
  }

  toggle(productId: string): void {
    if (this.has(productId)) {
      this.ids.update(ids => ids.filter(id => id !== productId));
      this.toast.show('Item removed from your wishlist.');
    } else {
      this.ids.update(ids => [...ids, productId]);
      this.toast.show('Item saved to your wishlist.');
    }
  }
}
