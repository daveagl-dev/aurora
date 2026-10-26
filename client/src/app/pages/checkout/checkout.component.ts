import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CurrencyService } from '../../core/services/currency.service';
import { ToastService } from '../../core/services/toast.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-checkout',
  imports: [IconComponent],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {
  protected readonly cart = inject(CartService);
  protected readonly currency = inject(CurrencyService);
  private readonly toast = inject(ToastService);

  /** 1 = address, 2 = shipping, 3 = payment, 4 = confirmation */
  protected readonly step = signal(1);
  protected readonly shippingMethod = signal<'express'>('express');

  protected submitAddress(event: Event): void {
    event.preventDefault();
    this.step.set(2);
  }

  protected authorizePayment(): void {
    this.step.set(4);
    this.toast.show('Order placed successfully!');
  }
}
