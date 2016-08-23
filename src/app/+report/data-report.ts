import { Report, ReportItem } from './index';

export const REPORT: Report = {
    id: 1,
    title: 'ISP National APHT Report',
    date: new Date(),
    category: [
        { id: 1, title: 'NBN National APHT (SIO)' },
        { id: 2, title: 'DSL National APHT (SIO)' }
    ],
    data: [
        { id: 11, isp: 'AAP', undefined_title: 'N63471231', peak: 5,  network: 12322,  kbps: 3132,      current_time: 1233, last_month: 1223,    category_id: 1 },
        { id: 12, isp: 'AAP', undefined_title: 'N12623631', peak: 6,  network: 12328,  kbps: 3422,      current_time: 1233, last_month: 15323,   category_id: 1 },
        { id: 13, isp: 'AAP', undefined_title: 'N15323R16', peak: 7,  network: 12232,  kbps: 3152,      current_time: 1233, last_month: 123,     category_id: 1 },
        { id: 14, isp: 'AAP', undefined_title: 'N12365231', peak: 8,  network: 12332,  kbps: 6432,      current_time: 1233, last_month: 1233,    category_id: 1 },
        { id: 15, isp: 'AAP', undefined_title: 'N12334231', peak: 9,  network: 12232,  kbps: 7452,      current_time: 1233, last_month: 12533,   category_id: 1 },
        { id: 16, isp: 'AAP', undefined_title: 'N12523531', peak: 10, network: 123232, kbps: 2532,      current_time: 1233, last_month: 1223,    category_id: 2 },
        { id: 17, isp: 'AAP', undefined_title: 'N12352351', peak: 11, network: 123232, kbps: 4532,      current_time: 1233, last_month: 15323,   category_id: 2 },
        { id: 18, isp: 'AAP', undefined_title: 'N1252F315', peak: 3,  network: 123232, kbps: 3752,      current_time: 1233, last_month: 51223,   category_id: 2 },
        { id: 19, isp: 'AAP', undefined_title: 'N12315255', peak: 5,  network: 123232, kbps: 3132,      current_time: 1233, last_month: 123,     category_id: 2 },
        { id: 20, isp: 'AAP', undefined_title: 'N12532531', peak: 5,  network: 123832, kbps: 2132,      current_time: 1233, last_month: 51623,   category_id: 1 },
        { id: 22, isp: 'AAP', undefined_title: 'N10087231', peak: 6,  network: 123232, kbps: 8762,      current_time: 1233, last_month: 1123,    category_id: 1 },
        { id: 23, isp: 'AAP', undefined_title: 'N12358581', peak: 7,  network: 1232,   kbps: 8432,      current_time: 1233, last_month: 6123,    category_id: 1 },
        { id: 24, isp: 'AAP', undefined_title: 'N12785731', peak: 8,  network: 123232, kbps: 3758132,   current_time: 1233, last_month: 11423,   category_id: 1 },
        { id: 25, isp: 'AAP', undefined_title: 'N12578731', peak: 9,  network: 123232, kbps: 386853762, current_time: 1233, last_month: 643123,  category_id: 1 },
        { id: 26, isp: 'AAP', undefined_title: 'N12578831', peak: 10, network: 12232,  kbps: 316332,    current_time: 1233, last_month: 126343,  category_id: 2 },
        { id: 27, isp: 'AAP', undefined_title: 'N15788231', peak: 11, network: 123232, kbps: 314332,    current_time: 1233, last_month: 1263413, category_id: 2 },
        { id: 28, isp: 'AAP', undefined_title: 'N15878231', peak: 3,  network: 123232, kbps: 3163432,   current_time: 1233, last_month: 643123,  category_id: 2 },
        { id: 29, isp: 'AAP', undefined_title: 'N15887231', peak: 5,  network: 123232, kbps: 31432,     current_time: 1233, last_month: 11623,   category_id: 2 }
    ]
};
