// src/app/auth/auth.service.ts
import { Injectable, Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/user.model'
//import * as jwt_decode from "jwt-decode";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';
import * as moment from "moment";


@Injectable()
export class AuthService {
    constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}
  // ...
    public isAuthenticated(): boolean {
        const token = localStorage.getItem('id_token');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    }

    login(user: LoginModel) {
        return this.http.post<string>('http://prestonpercivalbackend.azurewebsites.net/api/auth/login', user)
        .do(res => this.setSession(res)) 
        .shareReplay();
    }
        
    private setSession(authResult) {
        const result = this.jwtHelper.decodeToken(authResult.token);
        const expiresAt = moment.unix(result.exp);

        localStorage.setItem('id_token', authResult.token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }          

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }   

}