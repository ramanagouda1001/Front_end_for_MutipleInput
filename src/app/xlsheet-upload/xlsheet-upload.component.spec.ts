import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XLsheetUploadComponent } from './xlsheet-upload.component';

describe('XLsheetUploadComponent', () => {
  let component: XLsheetUploadComponent;
  let fixture: ComponentFixture<XLsheetUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XLsheetUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XLsheetUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
