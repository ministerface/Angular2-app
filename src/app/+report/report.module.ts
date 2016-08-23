import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { TabsComponent, TabComponent } from './index';

@NgModule({
    imports: [CommonModule],
    declarations: [ReportComponent, TabsComponent, TabComponent],
    exports: [ReportComponent, TabsComponent, TabComponent]
})

export class ReportModule { }
