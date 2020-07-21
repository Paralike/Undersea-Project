import { Component, OnInit, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FeatureService } from '../service/feature.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSlider } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  constructor(
    private service: FeatureService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<ExplorerComponent>,
  ) {

  }
  @ViewChild('matslider') slider: MatSlider;
  encapsulation: ViewEncapsulation.None;
  displayedColumns: string[] = ['name', 'selected'];
  displayedColumnsResults: string[] = ['cityname', 'spycount', 'defense'];
  dataSource: any;
  dataSource1: any;
  explorerList: any;
  selected: boolean;
  selectedUserId: string;

  ngOnInit(): void {
    this.service.getAllAttacks().subscribe(res => {
    
      this.dataSource = res;
      console.log(this.dataSource);
      console.log(this.dataSource[0].cityName);
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
    this.service.sendSpies(this.selectedUserId, this.slider.value).subscribe(() => {
      this.dialogRef.close();
      this.snackbar.open('Sikeres támadás!', 'Bezár', {
        duration: 3000
      });
  }, (err) => {
    console.log(err);
  });
}
}
