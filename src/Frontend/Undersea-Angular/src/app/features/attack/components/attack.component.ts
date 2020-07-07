import { Component, OnInit, ElementRef } from '@angular/core';
import {  MatSnackBar } from '@angular/material/snack-bar';
import { FeatureService } from '../../service/feature.service';


@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss']
})
export class AttackComponent implements OnInit {

  constructor(private el: ElementRef, private snackbar: MatSnackBar, private service: FeatureService) { }
  displayedColumns: string[] = ['target', 'choice'];
  userList;
  selected;
  alreadySelected: Array<number> = new Array<number>();
  selectedRowIndex:any;
  
  ngOnInit() {
    this.service.getArmy().subscribe(res => this.userList = res);
    this.selected = false;
      // we added this so that when the backdrop is clicked the modal is closed.
    //  this.userList =  ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8', 'user9', 'user10'];
  }
  
  onSelect(row){
    console.log(row.id);
    for(let i = 0; i < this.alreadySelected.length; i++){
      console.log(this.alreadySelected.length);
      console.log(this.alreadySelected[i]);
      if(row.id!=this.alreadySelected[i]){
        this.selected = true;
        this.alreadySelected.push(row.id);
      }else {
        this.selected = false;
      }
    }
    
    
  }
}


