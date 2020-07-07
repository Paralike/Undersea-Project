import { Component, OnInit, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  selectedRowIndex: any;

  ngOnInit() {
    this.service.getAttack().subscribe(res => this.userList = res);
    this.selected = false;
    this.alreadySelected.push(-1);
    // we added this so that when the backdrop is clicked the modal is closed.
    //  this.userList =  ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8', 'user9', 'user10'];
  }

  onSelect(row) {
    this.selected = true;
    this.selectedRowIndex = row.id;


  }
}


