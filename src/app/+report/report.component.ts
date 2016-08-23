import { Component, Input } from '@angular/core';
import { Report, ReportItem, ReportCategory, ReportService, TabsComponent } from './index';
import { ExportExcelService } from './shared/index';

@Component({
    selector: 'dr-report',
    templateUrl: 'report.component.html',
    providers: [ ReportService, ExportExcelService ]
})

export class ReportComponent {
    constructor(private reportService: ReportService, private exportExcelService: ExportExcelService) { }

    title: string;
    currentDate: Date;
    reportData: ReportItem[];
    reportCategory: ReportCategory[];

    ngOnInit(): void {
        this.getReport();
    }

    getReport(): void {
        this.reportService.getReport().then(
            report => {
                this.title = report.title;
                this.reportData = report.data;
                this.currentDate = report.date;
                this.reportCategory = report.category;
            }
       );
    }

    download(): void {
        this.exportExcelService.download(this.reportData, this.title, this.currentDate);
    }

}
