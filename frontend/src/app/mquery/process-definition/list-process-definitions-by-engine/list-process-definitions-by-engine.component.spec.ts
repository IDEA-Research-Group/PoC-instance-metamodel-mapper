import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProcessDefinitionsByEngineComponent } from './list-process-definitions-by-engine.component';

describe('ListProcessDefinitionsByEngineComponent', () => {
  let component: ListProcessDefinitionsByEngineComponent;
  let fixture: ComponentFixture<ListProcessDefinitionsByEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProcessDefinitionsByEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProcessDefinitionsByEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
