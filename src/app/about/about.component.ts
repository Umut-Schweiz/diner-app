import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { expand, flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
    flyInOut(),
    expand()
  ]

})
export class AboutComponent implements OnInit {

  leaders!:Leader[];
  errMess!: string;

  constructor(private leaderService:LeaderService) { }

  ngOnInit(): void {
    this.getLeaders();
  }

  getLeaders():void {
    this.leaderService.getLeaders()
    .subscribe({
      next:(leaders) => this.leaders = leaders,
      error: (errmess) => this.errMess = <any>errmess
    })
  }


}
