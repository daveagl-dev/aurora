import { Component, inject } from '@angular/core';
import { POPULAR_SEARCHES } from '../../core/data/mock-data';
import { Product } from '../../core/models';
import { CatalogService } from '../../core/services/catalog.service';
import { CurrencyService } from '../../core/services/currency.service';
import { NavigationService } from '../../core/services/navigation.service';
import { UiService } from '../../core/services/ui.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { AutofocusDirective } from '../../shared/directives/autofocus.directive';

@Component({
  selector: 'app-search-overlay',
  imports: [IconComponent, AutofocusDirective],
  templateUrl: './search-overlay.component.html',
})
export class SearchOverlayComponent {
  protected readonly catalog = inject(CatalogService);
  protected readonly currency = inject(CurrencyService);
  protected readonly ui = inject(UiService);
  private readonly nav = inject(NavigationService);

  protected readonly popularSearches = POPULAR_SEARCHES;

  protected onInput(event: Event): void {
    this.catalog.searchQuery.set((event.target as HTMLInputElement).value);
  }

  protected searchTerm(term: string): void {
    this.catalog.searchQuery.set(term);
    this.nav.goShop(this.catalog.selectedCategory());
    this.ui.isSearchOpen.set(false);
  }

  protected openProduct(product: Product): void {
    this.nav.goProduct(product);
    this.ui.isSearchOpen.set(false);
  }
}
