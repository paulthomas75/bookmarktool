import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Models, Interfaces } from '../models/bookmark.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bm-bookmark-dialog-container',
  template: ''
})
export class BookmarkDialogContainerComponent {
  constructor(public dialog: MatDialog) { }

  openDialog(dialogCallback: Function): void {
    const dialogViewModel: Models.Bookmark = new Models.Bookmark;
    const dialogRef = this.dialog.open(BookmarkDialogModalComponent, {
      width: '500px',
      data: dialogViewModel,
      position: { top: '100' + 'px' },
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
  bookmarkForm: FormGroup;
  submitted: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<BookmarkDialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Interfaces.IBookmark,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bookmarkForm = this.formBuilder.group({
        name: ['', Validators.required],
        group: ['', Validators.required],
        url: ['', Validators.required],
    });
  }

  get fc() { return this.bookmarkForm.controls; }

  onSubmit() {
    this.submitted = true;
     if (this.bookmarkForm.invalid) return;
     this.dialogRef.close({name: this.fc.name.value, group: this.fc.group.value, url: this.fc.url.value });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}