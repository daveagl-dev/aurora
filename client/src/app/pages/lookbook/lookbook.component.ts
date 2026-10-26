import { Component, inject } from '@angular/core';
import { LOOKBOOK_HOTSPOTS } from '../../core/data/mock-data';
import { NavigationService } from '../../core/services/navigation.service';
import { HotspotComponent } from '../../shared/components/hotspot/hotspot.component';

@Component({
  selector: 'app-lookbook',
  imports: [HotspotComponent],
  templateUrl: './lookbook.component.html',
})
export class LookbookComponent {
  protected readonly nav = inject(NavigationService);
  protected readonly editorials = LOOKBOOK_HOTSPOTS;
}
