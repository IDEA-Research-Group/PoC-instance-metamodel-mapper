import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProcessInstanceComponent } from './form-process-instance.component';

describe('FormProcessInstanceComponent', () => {
  let component: FormProcessInstanceComponent;
  let fixture: ComponentFixture<FormProcessInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProcessInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProcessInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
