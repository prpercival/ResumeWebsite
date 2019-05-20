// src/app/auth/auth.service.ts
import { Injectable, Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/user.model';
import { TokenModel } from '../models/token.model';
import { environment } from '../../environments/environment'
//import * as jwt_decode from "jwt-decode";
import { map, switchMap } from "rxjs/operators";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';
import * as moment from "moment";
import { Observable } from 'rxjs';

const APIEndpoint = environment.APIEndpoint;

@Injectable()
export class AuthService {

    public isValid: boolean = false;

    constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}
    // ... 
  
    public isAuthenticated(): boolean {
        const token: TokenModel = ({Token:localStorage.getItem('id_token')});   

        //var isValid: boolean = false;

        /*this.http.post<boolean>(APIEndpoint + '/api/auth/authentication', token)
        .do(res => {
            isValid = res
            return isValid
        })
        .shareReplay();*/
        //this.isValid(token).subscribe(res => isValid = res);
        //this.isTokenValid(token);

        //let test1 = test.subscribe(res => {return res} );
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token.Token);// && this.isValid;
        //let test3 = test2;
        //return !this.jwtHelper.isTokenExpired(token.Token) && isValid;// && (this.http.post<boolean>(APIEndpoint + '/api/auth/authentication', token)).pipe(map(res => res.json()));
    }

    async isTokenValid(token: TokenModel) {
        let promise = new Promise((resolve, reject) => {
            this.http.post<boolean>(APIEndpoint + '/api/auth/authentication', token)
            .toPromise()
            .then(res => { 
                this.isValid = res;
                resolve();
             }) 
        });
        return promise;
    }

    login(user: LoginModel) {
        return this.http.post<string>(APIEndpoint + '/api/auth/login', user)
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