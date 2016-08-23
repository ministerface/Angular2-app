import { Injectable } from '@angular/core';

@Injectable()
export class ExportExcelService {

    fieldName = {
        "id": "Number",
        "ISP": "String",
        "Undefined Title": "String",
        "Peak": "Number",
        "Network": "Number",
        "Kbps/SIO": "Number",
        "Current Time": "Number",
        "Last Month": "Number",
        "Category ID": "Number"
    }

    fieldTypes = {
        "id": "Number",
        "isp": "String",
        "undefined_title": "String",
        "peak": "Number",
        "network": "Number",
        "kbps": "Number",
        "current_time": "Number",
        "last_month": "Number",
        "category_id": "Number"
    }

    emitXmlHeader() {
        let headerRow = '<ss:Row>\n';
        for (let colName in this.fieldName) {
            if (colName != 'id' && colName != 'Category ID') {
                headerRow += '  <ss:Cell>\n';
                headerRow += '    <ss:Data ss:Type="String">';
                headerRow += colName + '</ss:Data>\n';
                headerRow += '  </ss:Cell>\n';
            }
        }
        headerRow += '</ss:Row>\n';
        return '<?xml version="1.0"?>\n' +
            '<ss:Workbook xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">\n' +
            '<ss:Worksheet ss:Name="Sheet1">\n' +
            '<ss:Table>\n\n' + headerRow;
    }

    emitXmlFooter() {
        return '\n</ss:Table>\n' +
            '</ss:Worksheet>\n' +
            '</ss:Workbook>\n';
    };

    jsonToSsXml(jsonObject) {
        let row;
        let col;
        let xml;
        let data = typeof jsonObject != "object"
            ? JSON.parse(jsonObject)
            : jsonObject;

        xml = this.emitXmlHeader();

        for (row = 0; row < data.length; row++) {
            xml += '<ss:Row>\n';

            for (col in data[row]) {
                if (col != 'id' && col != 'category_id') {
                    xml += '  <ss:Cell>\n';
                    xml += '    <ss:Data ss:Type="' + this.fieldTypes[col] + '">';
                    xml += data[row][col] + '</ss:Data>\n';
                    xml += '  </ss:Cell>\n';
                }
            }

            xml += '</ss:Row>\n';
        }

        xml += this.emitXmlFooter();
        return xml;
    }

    download(dataJson, fileName, dateFile) {
        let options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        let content = this.jsonToSsXml(dataJson);
        let filename = fileName + ' ' + dateFile.toLocaleString("en-US", options);
        let contentType = "application/vnd.ms-excel";

        if (!contentType) contentType = 'application/octet-stream';
        let a : any = document.getElementById('test');
        let blob  = new Blob([content], {
            'type': contentType
        });
        a.href = window.URL.createObjectURL(blob);
        a.download  = filename;
    };
}
