import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models';
import { CatalogService } from './catalog.service';
import { UiService } from './ui.service';

/** Central place for the navigation flows used across the storefront. */
@Injectable({ providedIn: 'root' })
export class NavigationService {
  private readonly router = inject(Router);
  private readonly catalog = inject(CatalogService);
  private readonly ui = inject(UiService);

  goHome(): void {
    this.ui.isMobileMenuOpen.set(false);
    this.router.navigate(['/']);
  }

  goShop(category = 'All'): void {
    this.ui.isMobileMenuOpen.set(false);
    this.catalog.selectedCategory.set(category);
    this.router.navigate(['/shop']);
  }

  goProduct(product: Product): void {
    this.router.navigate(['/product', product.id]);
  }

  goTo(path: 'lookbook' | 'cart' | 'checkout' | 'account'): void {
    this.ui.isMobileMenuOpen.set(false);
    this.router.navigate(['/', path]);
  }
}
