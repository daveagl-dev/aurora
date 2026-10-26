import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HOME_CATEGORIES, LOOKBOOK_HOTSPOTS, PRESS_MENTIONS } from '../../core/data/mock-data';
import { CatalogService } from '../../core/services/catalog.service';
import { NavigationService } from '../../core/services/navigation.service';
import { ToastService } from '../../core/services/toast.service';
import { HotspotComponent } from '../../shared/components/hotspot/hotspot.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  imports: [FormsModule, IconComponent, ProductCardComponent, HotspotComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  protected readonly nav = inject(NavigationService);
  private readonly toast = inject(ToastService);

  protected readonly categories = HOME_CATEGORIES;
  protected readonly press = PRESS_MENTIONS;
  protected readonly featuredLook = LOOKBOOK_HOTSPOTS[0];
  protected readonly trending = inject(CatalogService).products.slice(0, 4);
  protected email = '';

  protected subscribe(): void {
    this.toast.show('Welcome to Aurora Privé! Check your inbox for your 15% voucher code.');
    this.email = '';
  }
}
