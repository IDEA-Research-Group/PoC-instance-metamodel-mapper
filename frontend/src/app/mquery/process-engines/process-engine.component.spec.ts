import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessEngineComponent } from './process-engine.component';

describe('ProcessEngineComponent', () => {
  let component: ProcessEngineComponent;
  let fixture: ComponentFixture<ProcessEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessEngineComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
