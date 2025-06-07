import { Workbook } from 'exceljs';
exports.ReadActions = class ReadActions {

    constructor(page) {
        this.page = page
    }
    async readDataFromExcel(fileName, sheetName, rowNum, colNum) {
        const workbook = new Workbook()
        const data = await workbook.xlsx.readFile('.//testdata//ui_data//' + fileName).then(function () {
            const sheet = workbook.getWorksheet(sheetName)
            return sheet.getRow(rowNum).getCell(colNum).toString()
        });
        return data;
    }
}
