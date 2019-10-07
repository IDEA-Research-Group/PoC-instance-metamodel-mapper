import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProcessEngineComponent } from './create-process-engine.component';

describe('CreateProcessEngineComponent', () => {
  let component: CreateProcessEngineComponent;
  let fixture: ComponentFixture<CreateProcessEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProcessEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProcessEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
