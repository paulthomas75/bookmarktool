import { createAction, props } from '@ngrx/store';
import { Models } from '../models/bookmark.models';

export enum BookmarkActionTypes {
    AddBookmarkSuccess = "'[Bookmark] Add Success'",
    AddBookmarkRequest = "'[Bookmark] Add Request'",
    RemoveBookmarkSuccess = "'[Bookmark] Remove Success'",
    RemoveBookmarkRequest = "'[Bookmark] Remove Request'",
}
export const BookmarkAdd = createAction(
    BookmarkActionTypes.AddBookmarkSuccess,
    props<{bookmark: Models.Bookmark}>()
)

export const BookmarkRemove = createAction(
    BookmarkActionTypes.RemoveBookmarkSuccess,
    props<{bookmark: Models.Bookmark}>()
)

// export type BookmarkActions
//     = BookmarkActionTypes.AddBookmarkSuccess
//     | BookmarkActionTypes.AddBookmarkRequest
//     | BookmarkActionTypes.RemoveBookmarkSuccess
//     | BookmarkActionTypes.RemoveBookmarkRequest;
