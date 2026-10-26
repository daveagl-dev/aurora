import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CurrencyService } from '../../core/services/currency.service';
import { NavigationService } from '../../core/services/navigation.service';
import { UiService } from '../../core/services/ui.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-quick-view-modal',
  imports: [IconComponent],
  templateUrl: './quick-view-modal.component.html',
})
export class QuickViewModalComponent {
  protected readonly cart = inject(CartService);
  protected readonly currency = inject(CurrencyService);
  protected readonly ui = inject(UiService);
  private readonly nav = inject(NavigationService);

  protected close(): void {
    this.ui.quickViewProduct.set(null);
  }

  protected viewProduct(): void {
    const product = this.ui.quickViewProduct();
    if (!product) return;
    this.nav.goProduct(product);
    this.close();
  }

  protected addToBag(): void {
    const product = this.ui.quickViewProduct();
    if (!product) return;
    this.cart.add(product);
    this.close();
  }
}
