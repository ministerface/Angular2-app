import { Component, Input } from '@angular/core';
import { ReportCategory, ReportItem  } from '../index';
import { CategoryPipe } from './category.pipe';

@Component({
    selector: 'dr-tabs',
    templateUrl: 'tabs.component.html',
    pipes: [CategoryPipe]
})

export class TabsComponent {
    @Input() category: ReportCategory[];
    @Input() data: ReportItem[];

    selectedCategoryId: number = 1;
    filteredData = [];

    onSelect(categ: ReportCategory): void {
        this.selectedCategoryId = categ.id;
    }
}
