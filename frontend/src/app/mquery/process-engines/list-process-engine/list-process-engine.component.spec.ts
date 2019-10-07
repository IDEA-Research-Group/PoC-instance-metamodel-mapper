import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProcessEngineComponent } from './list-process-engine.component';

describe('ListProcessEngineComponent', () => {
  let component: ListProcessEngineComponent;
  let fixture: ComponentFixture<ListProcessEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProcessEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProcessEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
