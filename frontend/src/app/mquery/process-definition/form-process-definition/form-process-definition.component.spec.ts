import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProcessDefinitionComponent } from './form-process-definition.component';

describe('FormProcessDefinitionComponent', () => {
  let component: FormProcessDefinitionComponent;
  let fixture: ComponentFixture<FormProcessDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProcessDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProcessDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
