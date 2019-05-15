import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../angular-material.module'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
