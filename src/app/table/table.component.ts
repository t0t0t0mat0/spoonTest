import { Component, OnInit, ViewChild } from '@angular/core';
import { Sample } from '../sample';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @ViewChild('tableVar') tableVar: Table | undefined;

  samples: Sample[] = [
    {
      packageID: 'test',
      instrumentID: 'test',
      isin: 'test',
      sedol: 'test',
      cusip: 'test',
      marketID: 'test',
      type: 'test',
      name: 'test',
      currency: 'test',
      exchange: 'test',
      maturityDate: 'test',
      coupon: 1,
      issueDate: 'test',
    },
    {
      packageID: 'asdf',
      instrumentID: 'asdf',
      isin: 'asdf',
      sedol: 'asdf',
      cusip: 'asdf',
      marketID: 'asdf',
      type: 'asdf',
      name: 'asdf',
      currency: 'asdf',
      exchange: 'asdf',
      maturityDate: 'asdf',
      coupon: 2,
      issueDate: 'asdf',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  applyFilterGlobal($event: any, stringVal: any) {
    this.tableVar!.filterGlobal(
      ($event.target as HTMLInputElement).value,
      stringVal
    );
  }
}
