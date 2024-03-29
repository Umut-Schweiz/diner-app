import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { PromotionService } from '../services/promotion.service';
import { Dish } from '../shared/dish';
import { Leader } from '../shared/leader';
import { Promotion } from '../shared/promotion';
import { expand, flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
    flyInOut(),
    expand()
  ]

})
export class HomeComponent implements OnInit {

  dish!: Dish;
  promotion!: Promotion;
  leader!:Leader;
  dishErrMess!: string;
  promoErrMess!: string;
  leaderErrMess!: string;

  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService:LeaderService
  ) {}

  ngOnInit(): void {
    this.getFeaturedDish();
    this.getFeaturedPromotion();
    this.getFeaturedLeader();
  }

  getFeaturedDish(){
    this.dishService.getFeaturedDish()
      .subscribe({
        next:(data) => this.dish = data,
        error: (errmess) => this.dishErrMess = <any>errmess
      })
  }

  getFeaturedPromotion(){
    this.promotionService.getFeaturedPromotion()
      .subscribe({
        next:(data) => this.promotion = data,
        error: (errmess) => this.promoErrMess = <any>errmess
      })
  }

  getFeaturedLeader(){
    this.leaderService.getFeaturedLeader()
      .subscribe({
        next:(data) => this.leader = data,
        error: (errmess) => this.leaderErrMess = <any>errmess
      })
  }

}
