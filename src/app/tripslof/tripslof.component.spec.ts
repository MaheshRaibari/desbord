import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripslofComponent } from './tripslof.component';

describe('TripslofComponent', () => {
  let component: TripslofComponent;
  let fixture: ComponentFixture<TripslofComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripslofComponent]
    });
    fixture = TestBed.createComponent(TripslofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
