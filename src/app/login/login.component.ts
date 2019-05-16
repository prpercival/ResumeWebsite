/*import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(private router: Router, private http: HttpClient) { }

  login(form: NgForm) {
    let credentials = JSON.stringify(form.value);
    this.http.post("http://localhost:5000/api/auth/login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      let token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(["/"]);
    }, err => {
      this.invalidLogin = true;
    });
  }

}*/

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service'
import { LoginModel } from '../models/user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthService ]
})

export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }
    username: string;
    password: string;
    public isUserAuthenticated: boolean = false; 
      ngOnInit() {
        Promise.resolve
      }

      login() : void {
        if(this.username == 'admin' && this.password == 'admin'){
        this.router.navigate(["navigation/home"]);
        }else {
          alert("Invalid credentials");
        }
      }

      test() {
        const val: LoginModel = ({ UserName: this.username, Password: this.password});

        if (this.username && this.password) {
            this.authService.login(val)
                .subscribe(
                    () => {
                        console.log("User is logged in");
                        this.router.navigateByUrl('/navigation/home');
                    }
                );
        }
      }

      public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        //return !this.jwtHelper.isTokenExpired(token);
        return this.isUserAuthenticated;
      }
}
