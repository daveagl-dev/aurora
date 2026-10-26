import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CurrencyService } from '../../core/services/currency.service';
import { NavigationService } from '../../core/services/navigation.service';
import { UiService } from '../../core/services/ui.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-cart-drawer',
  imports: [IconComponent],
  templateUrl: './cart-drawer.component.html',
})
export class CartDrawerComponent {
  protected readonly cart = inject(CartService);
  protected readonly currency = inject(CurrencyService);
  protected readonly ui = inject(UiService);
  private readonly nav = inject(NavigationService);

  protected checkout(): void {
    this.ui.isCartOpen.set(false);
    this.nav.goTo('checkout');
  }

  protected viewBag(): void {
    this.ui.isCartOpen.set(false);
    this.nav.goTo('cart');
  }
}
