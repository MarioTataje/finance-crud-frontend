import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFiscalPositionComponent } from './list-fiscal-position.component';

describe('ListFiscalPositionComponent', () => {
  let component: ListFiscalPositionComponent;
  let fixture: ComponentFixture<ListFiscalPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFiscalPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFiscalPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
