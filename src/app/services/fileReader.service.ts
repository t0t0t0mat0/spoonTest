import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class FileReaderService {
  constructor(private httpClient: HttpClient) {}

  // getData() {
  //   var workbook = XLSX.readFile('assets/data/sampleData.xlsx');

  //   console.log(workbook);
  // }
  read() {
    this.httpClient
      .get('assets/files/sampleData.xlsx', { responseType: 'blob' })
      .subscribe((data: any) => {
        const reader: FileReader = new FileReader();
        console.log(data);

        let dataJson1;
        let dataJson2;

        reader.onload = (e: any) => {
          // console.log(e);
          const bstr: string = e.target.result;
          const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

          // grab first sheet
          const wsname1: string = wb.SheetNames[1];
          const ws1: XLSX.WorkSheet = wb.Sheets[wsname1];

          // save data
          dataJson1 = XLSX.utils.sheet_to_json(ws1);
          console.log('Data in sheet 1', dataJson1);
        };
        reader.readAsBinaryString(data);

        console.log(data);
        console.log(dataJson1);
      });
  }
}
