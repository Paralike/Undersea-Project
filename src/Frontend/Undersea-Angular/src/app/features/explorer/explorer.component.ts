import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FeatureService } from '../service/feature.service';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  constructor(private service: FeatureService) { }
  encapsulation: ViewEncapsulation.None;
  displayedColumns: string[] = [ 'name', 'selected'];
  dataSource: any;
  explorerList: any;
  selected: boolean;
  selectedUserId: string;

  ngOnInit(): void {

  }
  onSelect(row) {
    console.log('ROW', row);
    this.selected = true;
    this.selectedUserId = row.id;
    console.log(row.id);
  }
}
