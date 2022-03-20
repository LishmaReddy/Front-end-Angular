import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPriCalComponent } from './car-pri-cal.component';

describe('CarPriCalComponent', () => {
  let component: CarPriCalComponent;
  let fixture: ComponentFixture<CarPriCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarPriCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPriCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
