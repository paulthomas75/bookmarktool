import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material';
import { BookmarkDialogContainerComponent } from './bookmark-dialog-container.component';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';

describe('BookmarkDialogContainerComponent', () => {
  let component: BookmarkDialogContainerComponent;
  let fixture: ComponentFixture<BookmarkDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkDialogContainerComponent ],
      providers: [Store, MatDialog],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({})
      ],

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
