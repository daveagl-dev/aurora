import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { ColorOption } from '../../core/models';
import { CartService } from '../../core/services/cart.service';
import { CatalogService } from '../../core/services/catalog.service';
import { CurrencyService } from '../../core/services/currency.service';
import { NavigationService } from '../../core/services/navigation.service';
import { UiService } from '../../core/services/ui.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-product-detail',
  imports: [IconComponent],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
  /** Bound from the `:id` route parameter. */
  readonly id = input<string>();

  protected readonly cart = inject(CartService);
  protected readonly currency = inject(CurrencyService);
  protected readonly nav = inject(NavigationService);
  protected readonly ui = inject(UiService);
  private readonly catalog = inject(CatalogService);

  protected readonly product = computed(() => this.catalog.getById(this.id()));
  protected readonly activeImage = signal(0);
  protected readonly selectedColor = signal<ColorOption | null>(null);
  protected readonly selectedSize = signal<string | null>(null);

  constructor() {
    // Reset the gallery and selectors whenever a different product is shown.
    effect(() => {
      const p = this.product();
      this.activeImage.set(0);
      this.selectedColor.set(p ? p.colors[0] : null);
      this.selectedSize.set(p ? (p.sizes[1] ?? p.sizes[0]) : null);
    });
  }

  protected addToBag(): void {
    const p = this.product();
    if (!p) return;
    this.cart.add(p, this.selectedColor() ?? p.colors[0], this.selectedSize() ?? p.sizes[0]);
  }

  protected expressCheckout(): void {
    this.addToBag();
    this.ui.isCartOpen.set(false);
    this.nav.goTo('checkout');
  }
}
