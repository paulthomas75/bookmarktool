import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkDialogContainerComponent } from './bookmark-dialog-container.component';

describe('BookmarkDialogContainerComponent', () => {
  let component: BookmarkDialogContainerComponent;
  let fixture: ComponentFixture<BookmarkDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
