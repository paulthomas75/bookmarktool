import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookmarkStoreModule } from './store/bookmark-store.module';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BookmarkContainerComponent } from './bookmark-container/bookmark-container.component';
import { BookmarkGroupComponent } from './bookmark-group/bookmark-group.component';
import { BookmarkDialogContainerComponent, BookmarkDialogModalComponent } from './bookmark-dialog-container/bookmark-dialog-container.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkContainerComponent,
    BookmarkGroupComponent,
    BookmarkDialogContainerComponent,
    BookmarkDialogModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BookmarkStoreModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [BookmarkDialogModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
