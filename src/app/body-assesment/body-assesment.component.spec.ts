import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAssesmentComponent } from './body-assesment.component';

describe('BodyAssesmentComponent', () => {
  let component: BodyAssesmentComponent;
  let fixture: ComponentFixture<BodyAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAssesmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
