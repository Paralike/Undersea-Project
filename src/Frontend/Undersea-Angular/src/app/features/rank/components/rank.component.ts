import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../../service/feature.service';


@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {

  constructor(private service: FeatureService) { }
  displayedColumns: string[] = ['name', 'points'];
  rankList; 
  ngOnInit(): void {
    this.service.getRanks().subscribe(res => this.rankList = res);
  }

}
