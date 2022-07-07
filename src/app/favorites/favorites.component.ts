import { Component, OnInit} from '@angular/core';
import { Favorite } from '../shared/favorite';
import { FavoriteService } from '../services/favorite.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class FavoritesComponent implements OnInit {

  favorites!: Favorite;
  delete!: boolean;
  errMess!: string;

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.getFavorites()
  }

  getFavorites(){
    this.favoriteService.getFavorites()
      .subscribe({
        next:(favorites) => this.favorites = favorites,
        error: (errmess) => this.errMess = <any>errmess
      })
  }

  deleteFavorite(id: string) {
    console.log('Deleting Dish ' + id);
  }

  /*
  deleteFavorite(id: string) {
    console.log('Deleting Dish ' + id);
    this.favoriteService.deleteFavorite(id)
    .subscribe({
      next:(favorites) => this.favorites = <Favorite>favorites,
      error: (errmess) => this.errMess = <any>errmess,
      complete:() =>  this.delete = false,
    })

  }
  */

}
