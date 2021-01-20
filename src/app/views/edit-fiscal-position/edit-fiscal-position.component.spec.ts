import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFiscalPositionComponent } from './edit-fiscal-position.component';

describe('EditFiscalPositionComponent', () => {
  let component: EditFiscalPositionComponent;
  let fixture: ComponentFixture<EditFiscalPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFiscalPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFiscalPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
