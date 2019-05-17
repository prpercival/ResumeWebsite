import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, NgModule } from '@angular/core';
import { MaterialModule } from '../angular-material.module'
import { AppRoutingModule } from '../app-routing.module'
import { MatSnackBar } from '@angular/material';
import {Router} from '@angular/router';

@NgModule({
})

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  message: string = 'loading :(';

  constructor(private cdr: ChangeDetectorRef, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.message = 'all done loading :)'
    this.cdr.detectChanges();
  }

  logout(){
    this.snackBar.open('Logout Successful!', '', {
      duration: 3000
    });
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.router.navigate(["/login"]);
  }

}
