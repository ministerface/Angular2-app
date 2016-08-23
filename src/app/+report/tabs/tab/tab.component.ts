import { Component, Input } from '@angular/core';
import { ReportCategory, ReportItem } from '../../index';

@Component({
    selector: 'dr-tab',
    templateUrl: 'tab.component.html'
})

export class TabComponent {
    @Input() category: ReportCategory[];
    @Input() data: ReportItem[];

    setColor(peak): string {
        if (peak > 10) {
            return "red-light";
        } else if (peak >= 8 && peak <= 10) {
            return "green-light";
        }
    }
}
