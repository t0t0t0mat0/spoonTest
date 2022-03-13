import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { Sample } from '../sample';

@Injectable({
  providedIn: 'root',
})
export class FileReaderService {
  constructor(private httpClient: HttpClient) {}

  private dataArray: any[] = [];
  private parsedData: Sample[] = [];
  private loaded = false;

  public get data() {
    if (this.loaded) {
      return this.parsedData;
    }
    return null;
  }

  // reads and formats data from sampleData.xlsx and returns usable objects
  read() {
    this.httpClient
      .get('assets/files/sampleData.xlsx', { responseType: 'blob' })
      .subscribe((data: any) => {
        const reader: FileReader = new FileReader();

        reader.onload = (e: any) => {
          const bstr: string = e.target.result;

          const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

          let firstSheetName = wb.SheetNames[0];
          let worksheet = wb.Sheets[firstSheetName];

          this.dataArray = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        };

        reader.onloadend = (_) => {
          this.loaded = true;

          // removes first two rows as they do not contain relevant data
          this.dataArray = this.dataArray.slice(2);

          // maps object values to correct keys
          this.parsedData = this.dataArray.map((s) => {
            let sample: Sample = {
              packageID: s.Search,
              instrumentID: s.Search_1,
              isin: s.Search_2,
              sedol: s.Search_3 || null,
              cusip: s.Search_4 || null,
              marketID: s.__EMPTY,
              type: s.__EMPTY_1,
              name: s.__EMPTY_2,
              currency: s.__EMPTY_3,
              exchange: s.__EMPTY_4,
              maturityDate: s.__EMPTY_5 || null,
              coupon: s.__EMPTY_6 || null,
              issueDate: s.__EMPTY_7 || null,
            };
            return sample;
          });
        };
        reader.readAsBinaryString(data);
      });
  }
}
