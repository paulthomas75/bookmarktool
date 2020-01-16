import { createReducer, on, Action } from '@ngrx/store';
import * as BookmarkActions from "./bookmark-store.actions";
import { Models } from '../models/bookmark.models';

export interface State {
    bookmarks: Array<Models.Bookmark>,
    pct: Array<Models.Bookmark>
}

export const initialState: State = {
    bookmarks: new Array<Models.Bookmark>(),
    pct: new Array<Models.Bookmark>(),
};

const bookmarkReducer = createReducer(
    initialState,
    on(BookmarkActions.BookmarkAdd, (state, { bookmark }) => ({...state, bookmarks: state.bookmarks.concat(bookmark)})),
);

export function reducer(state: State | undefined, action: Action) {
    return bookmarkReducer(state, action);
}