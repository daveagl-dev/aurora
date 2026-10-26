import { Component, computed, inject, input, signal } from '@angular/core';
import { Product } from '../../../core/models';
import { CartService } from '../../../core/services/cart.service';
import { CurrencyService } from '../../../core/services/currency.service';
import { NavigationService } from '../../../core/services/navigation.service';
import { UiService } from '../../../core/services/ui.service';
import { WishlistService } from '../../../core/services/wishlist.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-product-card',
  imports: [IconComponent],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  readonly product = input.required<Product>();

  protected readonly cart = inject(CartService);
  protected readonly currency = inject(CurrencyService);
  protected readonly nav = inject(NavigationService);
  protected readonly ui = inject(UiService);
  protected readonly wishlist = inject(WishlistService);

  protected readonly hovered = signal(false);
  protected readonly image = computed(() => {
    const p = this.product();
    return this.hovered() && p.images[1] ? p.images[1] : p.images[0];
  });
  protected readonly isWishlisted = computed(() => this.wishlist.ids().includes(this.product().id));
}
