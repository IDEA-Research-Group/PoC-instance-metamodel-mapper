import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProcessDefinitionComponent } from './update-process-definition.component';

describe('UpdateProcessDefinitionComponent', () => {
  let component: UpdateProcessDefinitionComponent;
  let fixture: ComponentFixture<UpdateProcessDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProcessDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProcessDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
