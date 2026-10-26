import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CurrencyService } from '../../core/services/currency.service';

@Component({
  selector: 'app-announcement-bar',
  template: `
    <div class="bg-[#0D0D0D] text-[#D4AF37] text-xs tracking-widest uppercase py-2 px-4 text-center font-medium flex items-center justify-center gap-3">
      <span>Complimentary Worldwide Express Courier on orders over {{ currency.format(cart.freeShippingThreshold) }}</span>
      <span class="hidden md:inline text-white/40">|</span>
      <span class="hidden md:inline text-white/80">Private Atelier Appointment Available in Paris &amp; NYC</span>
    </div>
  `,
})
export class AnnouncementBarComponent {
  protected readonly cart = inject(CartService);
  protected readonly currency = inject(CurrencyService);
}
