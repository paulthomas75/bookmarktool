import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material';
import { BookmarkGroupComponent } from './bookmark-group.component';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BookmarkGroupComponent', () => {
  let component: BookmarkGroupComponent;
  let fixture: ComponentFixture<BookmarkGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkGroupComponent ],
      providers: [MatDialog],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkGroupComponent);
    component = fixture.componentInstance;
    component.bookmarkGroup = {group: "Group1", expanded: true, bookmarks: [{ name: "Test1", group: "Group1", url: "url1" }]};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
