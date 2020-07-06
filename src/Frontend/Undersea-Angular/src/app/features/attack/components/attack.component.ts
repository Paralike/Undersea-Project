import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss']
})
export class AttackComponent implements OnInit {

  constructor(private el: ElementRef) { }
  ngOnInit() {
      // we added this so that when the backdrop is clicked the modal is closed.
     
  }
  
}


