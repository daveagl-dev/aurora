import { Component, inject } from '@angular/core';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  imports: [IconComponent],
  template: `
    @if (toast.message(); as message) {
      <div class="fixed bottom-6 right-6 z-50 bg-[#0D0D0D] text-white text-xs px-5 py-3 rounded shadow-2xl border border-[#C5A059]/40 flex items-center gap-3 animate-slideUp">
        <app-icon name="sparkles" cls="w-4 h-4 text-[#C5A059]" />
        <span>{{ message }}</span>
      </div>
    }
  `,
})
export class ToastComponent {
  protected readonly toast = inject(ToastService);
}
