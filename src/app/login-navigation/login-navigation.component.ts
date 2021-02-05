import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from '../dialog-modal/dialog-modal';

@Component({
  selector: 'app-login-navigation',
  templateUrl: './login-navigation.component.html',
  styleUrls: ['./login-navigation.component.css']
})
export class LoginNavigationComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate([""]);
  }

  contactMessage(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: {title: "Contact Information", message: "If you have any questions or would like to request access to my page, please email me at the address below. \n presperc@gmail.com"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.title = result;
    });
  }

}
