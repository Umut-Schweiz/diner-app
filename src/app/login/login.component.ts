import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {username: '', password: '', remember: false};
  errMess!: string;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log('User: ', this.user);
    this.authService.logIn(this.user)
      .subscribe({
        next: (res) => {
          if (res.success) {
            this.dialogRef.close(res.success);
          } else {
            console.log(res);
          }
        },
        error: (errmess) => this.errMess = <any>errmess
      });
  }
}
