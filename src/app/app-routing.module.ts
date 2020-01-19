import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkContainerComponent } from './bookmark-container/bookmark-container.component';

const routes: Routes = [
  {path: '**', component: BookmarkContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
