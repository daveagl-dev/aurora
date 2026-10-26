import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CurrencyService } from '../../core/services/currency.service';
import { NavigationService } from '../../core/services/navigation.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-cart',
  imports: [IconComponent],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  protected readonly cart = inject(CartService);
  protected readonly currency = inject(CurrencyService);
  protected readonly nav = inject(NavigationService);
}
