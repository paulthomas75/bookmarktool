import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Models } from '../models/bookmark.models';


@Component({
  selector: 'bm-bookmark-group',
  templateUrl: './bookmark-group.component.html',
  styleUrls: ['./bookmark-group.component.scss']
})
export class BookmarkGroupComponent {
  @Input() bookmarkGroup: Models.GroupedBookmark;
  @Output() outRemoveClicked = new EventEmitter();

  constructor() {}

  onRemovedClicked(bookmark) {
    this.outRemoveClicked.emit(bookmark);
  }
}
