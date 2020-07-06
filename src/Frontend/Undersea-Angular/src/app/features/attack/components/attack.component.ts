import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss']
})
export class AttackComponent implements OnInit {

  constructor(private el: ElementRef) { }
  displayedColumns: string[] = ['target'];
  userList;
  
  ngOnInit() {
      // we added this so that when the backdrop is clicked the modal is closed.
     this.userList =  ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];
  }
  
}


