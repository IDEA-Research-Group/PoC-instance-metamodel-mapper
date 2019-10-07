import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcessDefinitionComponent } from './view-process-definition.component';

describe('ViewProcessDefinitionComponent', () => {
  let component: ViewProcessDefinitionComponent;
  let fixture: ComponentFixture<ViewProcessDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProcessDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcessDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
