import { Component, OnInit, ViewChild } from '@angular/core';
import { Sample } from '../sample';
import { Table } from 'primeng/table';
import { FileReaderService } from '../services/fileReader.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @ViewChild('tableVar') tableVar: Table | undefined;
  selectedSample: Sample | undefined;
  displaySidebar: boolean = false;
  isLoading: boolean = true;

  samples: Sample[] | null = null;

  constructor(private fileReaderService: FileReaderService) {}

  ngOnInit(): void {
    this.fileReaderService.read();
    if (this.fileReaderService.data == null) {
      setTimeout(() => {
        this.samples = this.fileReaderService.data;
        this.isLoading = false;
      }, 1000);
    } else {
    }
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.tableVar!.filterGlobal(
      ($event.target as HTMLInputElement).value,
      stringVal
    );
  }
  onClickTableRow(sample: Sample) {
    this.selectedSample = sample;
    this.displaySidebar = !this.displaySidebar;
  }
}
