import { JwtHelperService, JwtModule  } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtHelper: JwtHelperService, private router: Router) {
  }
  canActivate() {
    var token = localStorage.getItem("jwt");

    if (token && !this.jwtHelper.isTokenExpired(token)){
      console.log(this.jwtHelper.decodeToken(token));
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }
}