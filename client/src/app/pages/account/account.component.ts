import { Component, inject } from '@angular/core';
import { CatalogService } from '../../core/services/catalog.service';
import { CurrencyService } from '../../core/services/currency.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-account',
  imports: [IconComponent],
  templateUrl: './account.component.html',
})
export class AccountComponent {
  protected readonly currency = inject(CurrencyService);
  protected readonly product = inject(CatalogService).products[0];

  protected readonly menu = [
    'Order History & Tracking',
    'Saved Shipping Addresses',
    'Private Concierge Booking',
    'VIP Tier Rewards (2,450 Points)',
  ];
}
