import { Component } from '@angular/core';
import * as angular from "angular";
import { MatDialog } from '@angular/material';
import { ModalComponent } from './dialog-modal/dialog-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-angular-app';

  constructor() {}

}
