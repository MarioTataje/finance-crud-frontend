import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFiscalPositionComponent } from './add-fiscal-position.component';

describe('AddFiscalPositionComponent', () => {
  let component: AddFiscalPositionComponent;
  let fixture: ComponentFixture<AddFiscalPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFiscalPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFiscalPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
