// src/app/auth/auth-guard.service.ts
import { Injectable, Component } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
//import { DialogModalDialog, DialogModal } from '../dialog-modal/dialog-modal'
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../dialog-modal/dialog-modal';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenModel } from '../models/token.model';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router, private dialog: MatDialog, public jwtHelper: JwtHelperService ) {}
  async canActivate() {
    const token: TokenModel = ({Token:localStorage.getItem('id_token')}); 
    if (!(await this.auth.isAuthenticated())) {
      this.router.navigate(['']);
      
      this.errorMessage();

      return false;
    }
    return true && !this.jwtHelper.isTokenExpired(token.Token);;
  }

  errorMessage(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {title: "Error unauthorized", message: "Please log in to access this page."}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.title = result;
    });
  }
}