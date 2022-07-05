import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes!:Dish[];
  selectedDish!: Dish;
  errMess!: string;

  constructor(
    private dishService:DishService) { }

  ngOnInit(): void {
    this.getDishes()
  }

  getDishes(){
    this.dishService.getDishes()
    .subscribe({
      next:(dishes) => this.dishes = dishes,
      error: (errmess) => this.errMess = <any>errmess
    })

  }

}
