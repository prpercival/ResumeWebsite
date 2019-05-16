import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, NgModule } from '@angular/core';
import { MaterialModule } from '../angular-material.module'
import { AppRoutingModule } from '../app-routing.module'

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

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.message = 'all done loading :)'
    this.cdr.detectChanges();
  }

}
