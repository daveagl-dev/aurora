import { Injectable, signal } from '@angular/core';
import { CURRENCIES } from '../data/mock-data';
import { Currency } from '../models';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  readonly currencies = CURRENCIES;
  readonly currency = signal<Currency>(CURRENCIES[0]);

  setCurrency(code: string): void {
    const found = this.currencies.find(c => c.code === code);
    if (found) this.currency.set(found);
  }

  format(amount: number): string {
    const { symbol, rate } = this.currency();
    const converted = amount * rate;
    return `${symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  }
}
