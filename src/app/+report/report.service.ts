import { Injectable } from '@angular/core';
import { Report, REPORT } from './index';

@Injectable()
export class ReportService {
    getReport(): Promise<Report> {
        return Promise.resolve(REPORT);
    }
}
