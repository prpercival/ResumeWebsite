import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service'
import { LoginModel } from '../models/user.model'
import { ModalComponent } from '../dialog-modal/dialog-modal';
import { duration } from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, MatSnackBar, ModalComponent]
})

export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService, private snackBar: MatSnackBar, private dialog: MatDialog) { }
  username: string;
  password: string;
  public isUserAuthenticated: boolean = false;
  ngOnInit() {
    Promise.resolve
  }

  test(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["navigation/home"]);
    } else {
      alert("Invalid credentials");
    }
  }

  login() {
    const val: LoginModel = ({ UserName: this.username, Password: this.password });

    if (this.username && this.password) {
      this.snackBar.open('Logging in...', '', { duration: 10000 });
      this.authService.login(val)
        .subscribe(
          result => { 
            console.log("User is logged in");
            this.snackBar.dismiss();
            this.snackBar.open('Login Successful!', '', {
              duration: 3000
            });
            this.router.navigate(["navigation/home"]);
          },
          error => {
            this.snackBar.dismiss();
            this.snackBar.open(`Error: ${error.status} ${error.statusText}`, '', {
              duration: 3000
            });
          }
        );
    }
  }

  register() {
    this.router.navigate(["register"]);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    //return !this.jwtHelper.isTokenExpired(token);
    return this.isUserAuthenticated;
  }
}
