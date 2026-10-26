import { Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { LookbookComponent } from './pages/lookbook/lookbook.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ShopComponent } from './pages/shop/shop.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Aurora' },
  { path: 'shop', component: ShopComponent, title: 'Collections | Aurora' },
  { path: 'product/:id', component: ProductDetailComponent, title: 'Product | Aurora' },
  { path: 'lookbook', component: LookbookComponent, title: 'Lookbook | Aurora' },
  { path: 'cart', component: CartComponent, title: 'Shopping Bag | Aurora' },
  { path: 'checkout', component: CheckoutComponent, title: 'Checkout | Aurora' },
  { path: 'account', component: AccountComponent, title: 'My Account | Aurora' },
  { path: '**', redirectTo: '' },
];
