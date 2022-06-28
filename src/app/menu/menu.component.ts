import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

const DISHES:Dish[] = [
  {
    id: '0',
    name: 'Uthappizza',
    imageUrl: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '4.99',
    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
    comments: [
      {
          rating: 5,
          comment: 'Imagine all the eatables, living in conFusion!',
          author: 'John Lemon',
          date: '2012-10-16T17:57:28.556094Z'
      },
      {
          rating: 4,
          comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
          author: 'Paul McVites',
          date: '2014-09-05T17:57:28.556094Z'
      },
      {
          rating: 3,
          comment: 'Eat it, just eat it!',
          author: 'Michael Jaikishan',
          date: '2015-02-13T17:57:28.556094Z'
      },
      {
          rating: 4,
          comment: 'Ultimate, Reaching for the stars!',
          author: 'Ringo Starry',
          date: '2013-12-02T17:57:28.556094Z'
      },
      {
          rating: 2,
          comment: 'It\'s your birthday, we\'re gonna party!',
          author: '25 Cent',
          date: '2011-12-02T17:57:28.556094Z'
      }
  ]
  },
  {
    id: '1',
    name: 'Zucchipakoda',
    imageUrl: 'https://images.unsplash.com/photo-1631788012420-a0d6a3cfcdfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    category: 'appetizer',
    featured: false,
    label: '',
    price: '1.99',
    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
    comments : []
  },
  {
    id: '2',
    name: 'Vadonut',
    imageUrl: 'https://images.unsplash.com/photo-1571859812101-5512cab4416d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    category: 'appetizer',
    featured: false,
    label: 'New',
    price: '1.99',
    description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
    comments : []
  },
  {
    id: '3',
    name: 'ElaiCheese Cake',
    imageUrl: 'https://images.unsplash.com/photo-1508737804141-4c3b688e2546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZWxhaWNoZWVzZSUyMGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
    category: 'dessert',
    featured: false,
    label: '',
    price: '2.99',
    description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
    comments : []
  }
 ];;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes = DISHES;
  selectedDish = DISHES[0];

  constructor() { }

  ngOnInit(): void {
  }

}
