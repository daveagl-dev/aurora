import { Component, computed, inject, input } from '@angular/core';
import { Hotspot } from '../../../core/models';
import { CatalogService } from '../../../core/services/catalog.service';
import { CurrencyService } from '../../../core/services/currency.service';
import { NavigationService } from '../../../core/services/navigation.service';
import { IconComponent } from '../icon/icon.component';

/** Pulsing "+" marker on an editorial image that reveals a shoppable product card on hover. */
@Component({
  selector: 'app-hotspot',
  imports: [IconComponent],
  templateUrl: './hotspot.component.html',
})
export class HotspotComponent {
  readonly spot = input.required<Hotspot>();
  readonly size = input<'sm' | 'md'>('sm');
  readonly actionLabel = input('Quick View');

  protected readonly currency = inject(CurrencyService);
  private readonly catalog = inject(CatalogService);
  private readonly nav = inject(NavigationService);

  protected readonly isMd = computed(() => this.size() === 'md');

  protected open(): void {
    const product = this.catalog.getById(this.spot().productId);
    if (product) this.nav.goProduct(product);
  }
}
