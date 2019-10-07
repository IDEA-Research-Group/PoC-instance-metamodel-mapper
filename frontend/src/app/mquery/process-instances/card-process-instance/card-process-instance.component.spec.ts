import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProcessInstanceComponent } from './card-process-instance.component';

describe('CardProcessInstanceComponent', () => {
  let component: CardProcessInstanceComponent;
  let fixture: ComponentFixture<CardProcessInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProcessInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProcessInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
