import { Component, OnInit, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FeatureService } from '../service/feature.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSlider } from '@angular/material/slider';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  constructor(
    private service: FeatureService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

  }
  @ViewChild('matslider') slider: MatSlider;
  encapsulation: ViewEncapsulation.None;
  displayedColumns: string[] = ['name', 'selected'];
  dataSource: any;
  dataSource1: any;
  explorerList: any;
  selected: boolean;
  selectedUserId: string;

  ngOnInit(): void {
    this.service.getAllAttacks().subscribe(res => {
      console.log(res);
      this.dataSource = res;
    });
    this.service.getAttack().subscribe(res => {
      this.dataSource1 = res;
    });

  }
  onSelect(row) {
    console.log('ROW', row);
    this.selected = true;
    this.selectedUserId = row.id;
    console.log(row.id);
  }

  sendData() {
    console.log(this.slider.value, this.selectedUserId);
    this.service.sendSpies(this.selectedUserId, this.slider.value).subscribe(() => { },
      (err) => {
        console.log(err);
      });
}
}
