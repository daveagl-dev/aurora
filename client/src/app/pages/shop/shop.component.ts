import { Component, inject } from '@angular/core';
import { CATEGORIES, COLORS, MAX_PRICE, MIN_PRICE, SIZES } from '../../core/data/mock-data';
import { GridColumns, SortOption } from '../../core/models';
import { CatalogService } from '../../core/services/catalog.service';
import { CurrencyService } from '../../core/services/currency.service';
import { NavigationService } from '../../core/services/navigation.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-shop',
  imports: [IconComponent, ProductCardComponent],
  templateUrl: './shop.component.html',
})
export class ShopComponent {
  protected readonly catalog = inject(CatalogService);
  protected readonly currency = inject(CurrencyService);
  protected readonly nav = inject(NavigationService);

  protected readonly categories = CATEGORIES;
  protected readonly sizes = SIZES;
  protected readonly colors = COLORS;
  protected readonly minPrice = MIN_PRICE;
  protected readonly maxPrice = MAX_PRICE;
  protected readonly gridOptions: { cols: GridColumns; icon: 'grid-2x2' | 'grid-3x3' | 'layout-grid' }[] = [
    { cols: 2, icon: 'grid-2x2' },
    { cols: 3, icon: 'grid-3x3' },
    { cols: 4, icon: 'layout-grid' },
  ];

  protected setSort(event: Event): void {
    this.catalog.sortBy.set((event.target as HTMLSelectElement).value as SortOption);
  }

  protected setPrice(event: Event): void {
    this.catalog.priceRange.set(Number((event.target as HTMLInputElement).value));
  }

  protected gridClass(): string {
    switch (this.catalog.gridCols()) {
      case 2: return 'sm:grid-cols-2';
      case 3: return 'sm:grid-cols-2 md:grid-cols-3';
      default: return 'sm:grid-cols-2 md:grid-cols-4';
    }
  }
}
