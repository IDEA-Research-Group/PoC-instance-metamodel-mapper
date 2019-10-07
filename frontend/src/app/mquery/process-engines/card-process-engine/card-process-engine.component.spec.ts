import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProcessEngineComponent } from './card-process-engine.component';

describe('CardProcessEngineComponent', () => {
  let component: CardProcessEngineComponent;
  let fixture: ComponentFixture<CardProcessEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProcessEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProcessEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
