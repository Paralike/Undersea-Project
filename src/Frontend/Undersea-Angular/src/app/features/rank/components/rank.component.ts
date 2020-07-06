import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {

  constructor() { }

  rankList; 
  ngOnInit(): void {
    this.rankList = ["user1", "user2", "user3", "user4"];
  }

}
