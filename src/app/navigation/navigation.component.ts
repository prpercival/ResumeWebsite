import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, NgModule } from '@angular/core';
import { MaterialModule } from '../angular-material.module'
import { AppRoutingModule } from '../app-routing.module'
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  public isUserAuthenticated: boolean = false;
  message: string = 'loading :(';

  constructor(private cdr: ChangeDetectorRef, private jwtHelper: JwtHelperService, private snackBar: MatSnackBar, private router: Router, public auth: AuthService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.message = 'all done loading :)'
    this.cdr.detectChanges();
  }

  login(){
    this.router.navigate(["/login"]);
  }

  logout(){
    this.snackBar.open('Logout Successful!', '', {
      duration: 3000
    });
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.router.navigate(["/login-navigation"]);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('id_token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
    //return this.isUserAuthenticated;
  }
}
