import { createSelector } from '@ngrx/store';
import * as fromBookmarks from './bookmark-store.reducers';
import { Models } from '../models/bookmark.models';

export const selectAllBookmarks = (state: fromBookmarks.State) => state.bookmarks;

export const selectorGetBookmarks = createSelector(
    selectAllBookmarks,
    (allBooksmarks: Models.Bookmark[]) => {
        return allBooksmarks;
    }
  );

// export const selectorBookmarksGrouped = createSelector(
//     selectAllBookmarks,
//     (allBooksmarks: Models.Bookmark[]) => {
//       if (allBooksmarks) {
//         return allBooksmarks.filter((bookmark: Models.Bookmark) => bookmark.group === "yaya");
//       } else {
//         return allBooksmarks;
//       }
//     }
//   );