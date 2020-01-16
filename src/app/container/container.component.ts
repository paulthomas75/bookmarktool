import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Models } from '../models/bookmark.models';
import * as reducers from "../store/bookmark-store.reducers"
import * as actions from '../store/bookmark-store.actions';

@Component({
  selector: 'bm-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  private inc: number = 0;
  constructor(private store: Store<reducers.State>){

  }
  ngOnInit() {

  }
  onAddClicked() {
    const testModel = new Models.Bookmark();
    this.inc++;
    testModel.group = "group" + this.inc;
    testModel.url = "myurl";
    testModel.name = "myname";
    this.store.dispatch(actions.BookmarkAdd({bookmark: testModel}));
  }
  // onSubmit(username: string, password: string) {
  //   store.dispatch(BookmarkAdd());
  // }
}
