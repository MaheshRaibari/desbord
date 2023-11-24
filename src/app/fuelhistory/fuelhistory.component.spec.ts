import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelhistoryComponent } from './fuelhistory.component';

describe('FuelhistoryComponent', () => {
  let component: FuelhistoryComponent;
  let fixture: ComponentFixture<FuelhistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuelhistoryComponent]
    });
    fixture = TestBed.createComponent(FuelhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
