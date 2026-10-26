import { Component, inject } from '@angular/core';
import { Product } from '../../core/models';
import { CartService } from '../../core/services/cart.service';
import { CurrencyService } from '../../core/services/currency.service';
import { NavigationService } from '../../core/services/navigation.service';
import { UiService } from '../../core/services/ui.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-wishlist-drawer',
  imports: [IconComponent],
  templateUrl: './wishlist-drawer.component.html',
})
export class WishlistDrawerComponent {
  protected readonly cart = inject(CartService);
  protected readonly currency = inject(CurrencyService);
  protected readonly ui = inject(UiService);
  protected readonly wishlist = inject(WishlistService);
  private readonly nav = inject(NavigationService);

  protected open(product: Product): void {
    this.ui.isWishlistOpen.set(false);
    this.nav.goProduct(product);
  }

  protected addToBag(product: Product): void {
    this.ui.isWishlistOpen.set(false);
    this.cart.add(product);
  }

  protected explore(): void {
    this.ui.isWishlistOpen.set(false);
    this.nav.goShop('All');
  }
}
