import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { RegisterModel } from '../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent } from '../dialog-modal/dialog-modal';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const APIEndpoint = environment.APIEndpoint;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private dialog: MatDialog, private snackBar: MatSnackBar, private http: HttpClient) { }
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  
  ngOnInit() {
  }

  submit() {
    const val: RegisterModel = ({ username: this.username, password: this.password, email: this.email, firstname: this.firstName, lastname: this.lastName});
    
    if(this.password != this.confirmPassword){
      const dialogRef = this.dialog.open(ModalComponent, {
        width: '250px',
        data: {title: "Passwords don't match!", message: "Please check retype your password and try again."}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        //this.title = result;
      });
    }
    else if(val.email == undefined || val.password == undefined || val.username == undefined || val.firstname == undefined || val.lastname == undefined)
    {
      const dialogRef = this.dialog.open(ModalComponent, {
        width: '250px',
        data: {title: "Error!", message: "Please fill out all of the fields and try again."}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        //this.title = result;
      });
    }
    else
    {
      this.snackBar.open('Registering...', '');

      var subscription = this.authService.registerUser(val).subscribe(
        () => {
            console.log("User has registered.");
            this.snackBar.dismiss();
            this.snackBar.open('Register Successful!', '', {
              duration: 3000
        });
      });   
    }
  }

  returnToLogin() {
    this.router.navigate([""]);
  }

}
