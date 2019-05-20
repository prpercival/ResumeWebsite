// src/app/auth/auth-guard.service.ts
import { Injectable, Component } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
//import { DialogModalDialog, DialogModal } from '../dialog-modal/dialog-modal'
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../dialog-modal/dialog-modal';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router, private dialog: MatDialog ) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['']);
      
      this.errorMessage();

      return false;
    }
    return true;
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