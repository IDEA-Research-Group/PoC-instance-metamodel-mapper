import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProcessDefinitionComponent } from './create-process-definition.component';

describe('CreateProcessDefinitionComponent', () => {
  let component: CreateProcessDefinitionComponent;
  let fixture: ComponentFixture<CreateProcessDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProcessDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProcessDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
