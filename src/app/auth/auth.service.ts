// src/app/auth/auth.service.ts
import { Injectable, Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { LoginModel, RegisterModel } from '../models/user.model';
import { TokenModel } from '../models/token.model';
import { environment } from '../../environments/environment'
//import * as jwt_decode from "jwt-decode";
import { map, switchMap } from "rxjs/operators";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/shareReplay';
import * as moment from "moment";
import { Observable } from 'rxjs';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ModalComponent } from '../dialog-modal/dialog-modal';
import { promise } from 'protractor';

const APIEndpoint = environment.APIEndpoint;

@Injectable()
export class AuthService {

    public isValid: boolean = false;

    constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private dialog: MatDialog, private snackBar: MatSnackBar) {}
    // ... 
  
    public async isAuthenticated() {
        const token: TokenModel = ({Token:localStorage.getItem('id_token')});   

        return fetch(APIEndpoint + '/api/auth/authentication', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(token)
        }).then(r => r.json());
    }

    registerUser(user: RegisterModel) {
        return this.http.post(APIEndpoint + '/api/customers/register', user)
        .catch((err: HttpErrorResponse) => {
            const dialogRef = this.dialog.open(ModalComponent, {
                width: '250px',
                data: {title: "Error!", message: err.error}
              });
            return err.error;
        })
        .shareReplay();
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