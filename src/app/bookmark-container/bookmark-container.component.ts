import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from "@ngrx/store";
import { Models, Interfaces, ViewModels } from '../models/bookmark.models';
import * as bookmarkReducers from "../store/bookmark-store.reducers";
import * as bookmarkActions from "../store/bookmark-store.actions";
import { BookmarkDialogContainerComponent } from '../bookmark-dialog-container/bookmark-dialog-container.component';
import { transition, animate } from '@angular/animations';

@Component({
  selector: 'bm-bookmark-container',
  templateUrl: 'bookmark-container.component.html',
  styleUrls: ['./bookmark-container.component.scss'],
})
export class BookmarkContainerComponent implements OnInit {
  @ViewChild(BookmarkDialogContainerComponent, { static: false }) addDialogChildView: BookmarkDialogContainerComponent;
  bookmarksCVM: ViewModels.bookmarksContainer;
  constructor(public store: Store<bookmarkReducers.State>) { }

  ngOnInit() {
    this.bookmarksCVM = new ViewModels.bookmarksContainer;
  }

  onAddClicked() {
    this.addDialogChildView.openDialog((modalBookmark: Interfaces.IBookmark) => {
      if (modalBookmark) {
        this.store.dispatch(bookmarkActions.BookmarkAdd({ bookmark: { name: modalBookmark.name.trim(), group: modalBookmark.group.trim(), url: modalBookmark.url.trim() } }));
        this.addGroupToViewModel(modalBookmark);
      }
    });
  }

  onRemovedClicked(bookmark) {
    this.removeFromViewModel(bookmark);
  }

  private addGroupToViewModel(bookmark: Models.Bookmark) {
    const existingGroup = this.bookmarksCVM.groupedBookmarks.filter(x => x.group === bookmark.group);
    if (existingGroup.length === 0) {
      const newGroup = new Models.GroupedBookmark();
      newGroup.group = bookmark.group;
      newGroup.expanded = true;
      newGroup.bookmarks = [bookmark];
      this.bookmarksCVM.groupedBookmarks.unshift(newGroup);
    }
    else {
      existingGroup[0].bookmarks.push(bookmark);
      existingGroup[0].expanded = true;
    }
  }

  private removeFromViewModel(bookmark: Models.Bookmark) {
    const existingGroup = this.bookmarksCVM.groupedBookmarks.filter(x => x.group === bookmark.group);
    existingGroup[0].bookmarks = existingGroup[0].bookmarks.filter(x => x.name !== bookmark.name);
    if (existingGroup[0].bookmarks.length === 0) {
      this.bookmarksCVM.groupedBookmarks = this.bookmarksCVM.groupedBookmarks.filter(x => x.group !== bookmark.group);
    }
  }
}

