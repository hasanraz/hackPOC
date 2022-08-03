import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalAssesmentComponent } from './physical-assesment.component';

describe('PhysicalAssesmentComponent', () => {
  let component: PhysicalAssesmentComponent;
  let fixture: ComponentFixture<PhysicalAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalAssesmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicalAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
