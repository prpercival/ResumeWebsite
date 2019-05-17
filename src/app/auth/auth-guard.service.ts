// src/app/auth/auth-guard.service.ts
import { Injectable, Component } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
//import { DialogModalDialog, DialogModal } from '../dialog-modal/dialog-modal'
import { MatDialog } from '@angular/material';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router, private dialog: MatDialog ) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['']);
      //const dialogRef = this.dialog.open(DialogModalDialog, {
      //  width: '250px',
      //  data: {name: "Test", animal: "test"}
      //});
      return false;
    }
    return true;
  }
}