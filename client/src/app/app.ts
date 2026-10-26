import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { AnnouncementBarComponent } from './layout/announcement-bar/announcement-bar.component';
import { CartDrawerComponent } from './overlays/cart-drawer/cart-drawer.component';
import { QuickViewModalComponent } from './overlays/quick-view-modal/quick-view-modal.component';
import { SearchOverlayComponent } from './overlays/search-overlay/search-overlay.component';
import { SizeGuideModalComponent } from './overlays/size-guide-modal/size-guide-modal.component';
import { ToastComponent } from './overlays/toast/toast.component';
import { WishlistDrawerComponent } from './overlays/wishlist-drawer/wishlist-drawer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, AnnouncementBarComponent, HeaderComponent, FooterComponent,
    SearchOverlayComponent, ToastComponent, CartDrawerComponent, WishlistDrawerComponent,
    QuickViewModalComponent, SizeGuideModalComponent,
  ],
  templateUrl: './app.html',
})
export class App {}
