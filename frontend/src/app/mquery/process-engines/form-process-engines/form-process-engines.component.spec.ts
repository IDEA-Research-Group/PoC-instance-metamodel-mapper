import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProcessEnginesComponent } from './form-process-engines.component';

describe('FormProcessEnginesComponent', () => {
  let component: FormProcessEnginesComponent;
  let fixture: ComponentFixture<FormProcessEnginesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProcessEnginesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProcessEnginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
