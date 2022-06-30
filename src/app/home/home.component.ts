import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { PromotionService } from '../services/promotion.service';
import { Dish } from '../shared/dish';
import { Leader } from '../shared/leader';
import { Promotion } from '../shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish!: Dish;
  promotion!: Promotion;
  leader!:Leader;

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
      .subscribe(data => this.dish = data)
  }

  getFeaturedPromotion(){
    this.promotionService.getFeaturedPromotion()
      .subscribe(data => this.promotion = data)
  }

  getFeaturedLeader(){
    this.leaderService.getFeaturedLeader()
      .subscribe(data => this.leader = data)
  }

}
