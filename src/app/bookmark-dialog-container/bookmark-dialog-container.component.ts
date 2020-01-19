import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Models, Interfaces } from '../models/bookmark.models';

@Component({
  selector: 'bm-bookmark-dialog-container',
  template: ''
})
export class BookmarkDialogContainerComponent { //Container

  constructor(public dialog: MatDialog) {}

  openDialog(dialogCallback: Function): void {
    const dialogViewModel: Models.Bookmark = new Models.Bookmark;
    const dialogRef = this.dialog.open(BookmarkDialogModalComponent, {
      width: '500px',
      data: dialogViewModel,
      position: {top: '100' + 'px'},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => dialogCallback(result));
  }

}
/*  MODAL POPUP */
@Component({
  selector: 'bm-bookmark-dialog-modal',
  templateUrl: 'bookmark-dialog-modal.html',
  styles: ['.mat-form-field  { width: 100%; }', '.mat-dialog-actions {justify-content: flex-end;}']
})
export class BookmarkDialogModalComponent {

  constructor(
    public dialogRef: MatDialogRef<BookmarkDialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Interfaces.IBookmark) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}