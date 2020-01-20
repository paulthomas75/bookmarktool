import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { BookmarkContainerComponent } from './bookmark-container.component';
import { By } from '@angular/platform-browser';
import { MaterialModule } from '../material.module';
import { Store, StoreModule } from '@ngrx/store';
import { ViewModels } from '../models/bookmark.models';
import { BookmarkDialogContainerComponent } from '../bookmark-dialog-container/bookmark-dialog-container.component';
import { BookmarkGroupComponent } from '../bookmark-group/bookmark-group.component';
import { MatDialog } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BookmarkContainerComponent', () => {
  let component: BookmarkContainerComponent;
  let fixture: ComponentFixture<BookmarkContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkContainerComponent, BookmarkGroupComponent, BookmarkDialogContainerComponent],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({})
      ],
      providers: [Store, MatDialog]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('bookmark View Container', () => {
    beforeEach(async () => {
      component.ngOnInit();
      await fixture.whenStable();
    });

    it('(bookmarksCVM) is initialised with ngOnInit', () => {
      expect(component.bookmarksCVM).toEqual(new ViewModels.bookmarksContainer)
    });

    it('should render title in mat-toolbar-row tag', () => {
      expect(fixture.debugElement.nativeElement.querySelector('mat-toolbar-row').textContent).toContain('Bookmark Manager Tool', "Actual Text: " + fixture.debugElement.nativeElement.querySelector('mat-toolbar-row').textContent);
    });
  });

  describe('clicking add button', () => {
    it('calls onAddClicked', async(() => {
      spyOn(component, 'onAddClicked');

      let button = fixture.debugElement.nativeElement.querySelector('button');
      button.click();

      fixture.whenStable().then(() => {
        expect(component.onAddClicked).toHaveBeenCalled();
        expect(Store.apply)
      });
    }));
  });

  describe('clicking remove button', () => {
    beforeEach(() => {
      component.bookmarksCVM.groupedBookmarks = [{
        group: "TestGroup",
        expanded: true,
        bookmarks: [{ name: "Test1", group: "Group1", url: "url1" }]
      }];
      fixture.detectChanges();
    })

    it('calls onRemovedClicked', fakeAsync(() => {
      spyOn(component, 'onRemovedClicked');
      var elementArr = fixture.debugElement.query(By.css('button.mat-icon-button'));
      elementArr.nativeElement.click();
      fixture.whenStable().then(() => {
        expect(component.onRemovedClicked).toHaveBeenCalled();
      });
    }));
  });
});
