import { Component, inject } from '@angular/core';
import { UiService } from '../../core/services/ui.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-size-guide-modal',
  imports: [IconComponent],
  templateUrl: './size-guide-modal.component.html',
})
export class SizeGuideModalComponent {
  protected readonly ui = inject(UiService);

  protected readonly rows = [
    { size: 'XS', eu: '34', bust: '80', waist: '62', hips: '86' },
    { size: 'S', eu: '36', bust: '84', waist: '66', hips: '90' },
    { size: 'M', eu: '38', bust: '88', waist: '70', hips: '94' },
    { size: 'L', eu: '40', bust: '92', waist: '74', hips: '98' },
    { size: 'XL', eu: '42', bust: '96', waist: '78', hips: '102' },
    { size: 'XXL', eu: '44', bust: '100', waist: '82', hips: '106' },
  ];
}
