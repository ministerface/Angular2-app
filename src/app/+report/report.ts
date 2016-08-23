import { ReportItem, ReportCategory } from './index';

export class Report {
    id: number;
    title: string;
    date: Date;
    category: ReportCategory[];
    data: ReportItem[];
}
