import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcessEngineComponent } from './view-process-engine.component';

describe('ViewProcessEngineComponent', () => {
  let component: ViewProcessEngineComponent;
  let fixture: ComponentFixture<ViewProcessEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProcessEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcessEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
