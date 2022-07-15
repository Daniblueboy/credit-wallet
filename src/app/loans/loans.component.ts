import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css'],
})
export class LoansComponent implements OnInit {
  isLoaded = false;
  searchForm: any;
  isLoading = false;
  totalRows = 0;
  pageSize = 10;
  currentPage = 0;
  // dtOptions: DataTables.Settings = {
  //   processing: true,
  // };
  // dtTrigger: Subject<any> = new Subject<any>();
  constructor() {}

  ngOnInit(): void {}

  // pageChanged(event: PageEvent) {
  //   console.log({ event });
  //   this.pageSize = event.pageSize;
  //   this.currentPage = event.pageIndex;
  // }
}
