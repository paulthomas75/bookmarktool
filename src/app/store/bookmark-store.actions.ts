import { createAction, props } from '@ngrx/store';
import { Models } from '../models/bookmark.models';
import { selectorGetBookmarks } from './bookmark-store.selectors';

export enum BookmarkActionTypes {
    AddBookmarkSuccess = "'[Bookmark] Add Success'",
    BookmarkRemove = "'[Bookmark] Remove Success'",
}

export const BookmarkAdd = createAction(
    BookmarkActionTypes.AddBookmarkSuccess,
    props<{ bookmark: Models.Bookmark }>()
)

export const BookmarkRemove = createAction(
    BookmarkActionTypes.BookmarkRemove,
    props<{ bookmark: Models.Bookmark }>()
)