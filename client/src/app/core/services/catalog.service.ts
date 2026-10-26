import { Injectable, computed, signal } from '@angular/core';
import { MAX_PRICE, PRODUCTS } from '../data/mock-data';
import { GridColumns, Product, SortOption } from '../models';

/** Product catalogue plus the search / filter / sort state of the shop. */
@Injectable({ providedIn: 'root' })
export class CatalogService {
  readonly products = PRODUCTS;

  readonly searchQuery = signal('');
  readonly selectedCategory = signal('All');
  readonly selectedSizes = signal<string[]>([]);
  readonly selectedColors = signal<string[]>([]);
  readonly priceRange = signal(MAX_PRICE);
  readonly sortBy = signal<SortOption>('featured');
  readonly gridCols = signal<GridColumns>(3);

  readonly hasActiveFilters = computed(
    () =>
      this.selectedCategory() !== 'All' ||
      this.selectedSizes().length > 0 ||
      this.selectedColors().length > 0 ||
      this.priceRange() < MAX_PRICE,
  );

  readonly filteredProducts = computed(() => {
    const category = this.selectedCategory();
    const maxPrice = this.priceRange();
    const sizes = this.selectedSizes();
    const colors = this.selectedColors();
    const query = this.searchQuery().trim().toLowerCase();
    const sortBy = this.sortBy();

    return this.products
      .filter(prod => {
        if (category !== 'All' && prod.category !== category) return false;
        if (prod.price > maxPrice) return false;
        if (sizes.length > 0 && !prod.sizes.some(s => sizes.includes(s))) return false;
        if (colors.length > 0 && !prod.colors.some(c => colors.includes(c.name))) return false;
        if (query !== '') {
          return (
            prod.name.toLowerCase().includes(query) ||
            prod.category.toLowerCase().includes(query) ||
            prod.description.toLowerCase().includes(query)
          );
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  });

  getById(id: string | undefined): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  toggleSize(size: string): void {
    this.selectedSizes.update(list => (list.includes(size) ? list.filter(s => s !== size) : [...list, size]));
  }

  toggleColor(name: string): void {
    this.selectedColors.update(list => (list.includes(name) ? list.filter(c => c !== name) : [...list, name]));
  }

  resetFilters(): void {
    this.selectedCategory.set('All');
    this.selectedSizes.set([]);
    this.selectedColors.set([]);
    this.priceRange.set(MAX_PRICE);
  }
}
