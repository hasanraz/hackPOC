import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedAssesmentComponent } from './accepted-assesment.component';

describe('AcceptedAssesmentComponent', () => {
  let component: AcceptedAssesmentComponent;
  let fixture: ComponentFixture<AcceptedAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedAssesmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
