import { Component, OnInit, ViewChild } from '@angular/core';
import { DishService } from '../services/dish.service'
import { Comment } from '../shared/comment';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';

import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { visibility } from '../animations/app.animation';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss'],
  animations: [
    visibility()
  ]
})
export class DishDetailComponent implements OnInit {

  dish!:Dish;
  dishIds!:string[];
  prev!: string;
  next!: string;
  commentForm!:FormGroup;
  comment!:Comment;
  errMess!: string;
  dishcopy!: Dish;
  visibility= 'shown';

  @ViewChild('cform') commentFormDirective!:{ resetForm: () => void; };

  constructor(
    private dishService:DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params:Params) => { this.visibility = 'hidden'; return this.dishService.getDish(+params['id']); }))
      .subscribe({
        next: (dish) => {this.dish = dish; this.dishcopy = dish; this.setPrevNext(dish.id); this.visibility = 'shown';},
        error: (errMess) => this.errMess = <any>errMess
      })
  }
  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length]; // exp. 3
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length]; // exp. 1
  }

  goBack(): void {
    this.location.back();
  }

  commentErrors:any = {
    'author': '',
    'comment': '',
  };

  validationMessages:any= {
    'author': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 25 characters long.'
    },
    'comment': {
      'minlength':     'Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 100 characters long.'
    }
  };

  createForm():void {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      rating: [''],
      comment: ['', [Validators.minLength(2), Validators.maxLength(100)] ]
    });

    this.commentForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.commentErrors) {
      if (this.commentErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.commentErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.commentErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    let cDate = new Date();
    this.comment = this.commentForm.value;
    let newComment = new Comment();
    newComment = this.comment
    newComment.date = cDate.toLocaleDateString();
    this.dishcopy.comments.push(newComment)
    this.dishService.putDish(this.dishcopy)
      .subscribe({
        next: (dish) => {this.dish = dish; this.dishcopy = dish},
        error: (errmess) => this.errMess = <any>errmess
      })
    this.commentFormDirective.resetForm();
    this.commentForm.reset({
      author: '',
      rating: '5',
      comment: '',
    });
  }
}
