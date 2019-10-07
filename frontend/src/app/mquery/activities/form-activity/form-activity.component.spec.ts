import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActivityComponent } from './form-activity.component';

describe('FormActivityComponent', () => {
  let component: FormActivityComponent;
  let fixture: ComponentFixture<FormActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
