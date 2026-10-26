import { Component, computed, input } from '@angular/core';
import {
  ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronRight, Grid2x2, Grid3x3, Heart,
  LayoutGrid, Lock, LucideAngularModule, LucideIconData, Menu, Minus, Plus, Search,
  ShieldCheck, ShoppingBag, Sparkles, Star, Trash2, Truck, User, X,
} from 'lucide-angular';

const ICONS = {
  'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight,
  check: Check,
  'chevron-down': ChevronDown,
  'chevron-right': ChevronRight,
  'grid-2x2': Grid2x2,
  'grid-3x3': Grid3x3,
  heart: Heart,
  'layout-grid': LayoutGrid,
  lock: Lock,
  menu: Menu,
  minus: Minus,
  plus: Plus,
  search: Search,
  'shield-check': ShieldCheck,
  'shopping-bag': ShoppingBag,
  sparkles: Sparkles,
  star: Star,
  'trash-2': Trash2,
  truck: Truck,
  user: User,
  x: X,
} satisfies Record<string, LucideIconData>;

export type IconName = keyof typeof ICONS;

/** Thin wrapper around lucide so templates only need `<app-icon name="..." cls="..." />`. */
@Component({
  selector: 'app-icon',
  imports: [LucideAngularModule],
  template: `<lucide-icon [img]="icon()" [class]="cls()" />`,
  styles: `:host { display: contents; }`,
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly cls = input('');
  protected readonly icon = computed(() => ICONS[this.name()]);
}
