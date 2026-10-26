import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { CartService } from '../../core/services/cart.service';
import { CatalogService } from '../../core/services/catalog.service';
import { CurrencyService } from '../../core/services/currency.service';
import { NavigationService } from '../../core/services/navigation.service';
import { UiService } from '../../core/services/ui.service';
import { WishlistService } from '../../core/services/wishlist.service';

@Component({
  selector: 'app-header',
  imports: [IconComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  protected readonly cart = inject(CartService);
  protected readonly catalog = inject(CatalogService);
  protected readonly currency = inject(CurrencyService);
  protected readonly nav = inject(NavigationService);
  protected readonly ui = inject(UiService);
  protected readonly wishlist = inject(WishlistService);
  private readonly router = inject(Router);

  /** Whether the current route belongs to the given top-level section. */
  protected isActive(section: 'home' | 'shop' | 'lookbook' | 'account'): boolean {
    const url = this.router.url.split('?')[0];
    if (section === 'home') return url === '/';
    return url === `/${section}`;
  }

  protected onCurrencyChange(event: Event): void {
    this.currency.setCurrency((event.target as HTMLSelectElement).value);
  }
}
