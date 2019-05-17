import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
    title: string;
    message: string;
}

/**
 * @title Dialog Overview
 */
/*@Component({
  selector: 'dialog-modal',
  templateUrl: 'dialog-modal.html',
  //styleUrls: ['dialog-overview-example.css'],
})
export class DialogModal {

    title: string;
    message: string;

    constructor(public dialog: MatDialog) {}

    openDialog(title: string, message: string): void {
        const dialogRef = this.dialog.open(DialogModalDialog, {
        width: '250px',
        data: {title: this.title, message: this.message}
        });

        dialogRef.afterClosed().subscribe(result => {
        //console.log('The dialog was closed');
        //this.animal = result;
        });
    }

}

@Component({
  selector: 'dialog-modal',
  templateUrl: 'dialog-modal.html',
})
export class DialogModalDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogModalDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}*/