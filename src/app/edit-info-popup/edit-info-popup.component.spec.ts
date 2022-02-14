import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfoPopupComponent } from './edit-info-popup.component';

describe('EditInfoPopupComponent', () => {
  let component: EditInfoPopupComponent;
  let fixture: ComponentFixture<EditInfoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInfoPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInfoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
