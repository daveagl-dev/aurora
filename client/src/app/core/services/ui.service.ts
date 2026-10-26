import { Injectable, signal } from '@angular/core';
import { Product } from '../models';

/** Visibility state for drawers, overlays and modals. */
@Injectable({ providedIn: 'root' })
export class UiService {
  readonly isCartOpen = signal(false);
  readonly isWishlistOpen = signal(false);
  readonly isSearchOpen = signal(false);
  readonly isMobileMenuOpen = signal(false);
  readonly isSizeGuideOpen = signal(false);
  readonly quickViewProduct = signal<Product | null>(null);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }
}
