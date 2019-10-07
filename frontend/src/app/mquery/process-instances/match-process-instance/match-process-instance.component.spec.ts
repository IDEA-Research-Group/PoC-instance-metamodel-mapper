import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchProcessInstanceComponent } from './match-process-instance.component';

describe('MatchProcessInstanceComponent', () => {
  let component: MatchProcessInstanceComponent;
  let fixture: ComponentFixture<MatchProcessInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchProcessInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchProcessInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
