import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule, 
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule {}