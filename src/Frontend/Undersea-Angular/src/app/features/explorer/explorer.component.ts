import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = [ 'name', 'feature'];
  dataSource;
  list: any;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.list);
  }

}
