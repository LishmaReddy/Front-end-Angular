import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateCalculationComponent } from './estimate-calculation.component';

describe('EstimateCalculationComponent', () => {
  let component: EstimateCalculationComponent;
  let fixture: ComponentFixture<EstimateCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateCalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
