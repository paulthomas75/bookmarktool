import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import * as fromBookmarks from './bookmark-store.reducers';

@NgModule({
    imports: [
        StoreModule.forRoot({
            bmStore: fromBookmarks.reducer 
        }),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    ],
    providers: [],
})
export class BookmarkStoreModule {}