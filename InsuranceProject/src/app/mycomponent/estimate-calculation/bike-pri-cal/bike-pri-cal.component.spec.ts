import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikePriCalComponent } from './bike-pri-cal.component';

describe('BikePriCalComponent', () => {
  let component: BikePriCalComponent;
  let fixture: ComponentFixture<BikePriCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikePriCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikePriCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
