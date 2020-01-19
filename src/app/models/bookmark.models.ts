export module Interfaces {
    export interface IBookmark {
        name: string;
        group: string;
        url: string;
    }
}

export module Models  {
    export class Bookmark implements Interfaces.IBookmark {
        name: string;
        group: string;
        url: string;
    }

    export class GroupedBookmark {
        group: string;
        expanded: boolean = true;
        bookmarks: Array<Bookmark> = new Array<Bookmark>();
    }
}


export module ViewModels  {
    export class bookmarksContainer{
        groupedBookmarks: Array<Models.GroupedBookmark>;
        constructor() {
            this.groupedBookmarks = new Array<Models.GroupedBookmark>();
        }
    }
}