import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchFormProcessInstanceComponent } from './match-form-process-instance.component';

describe('MatchFormProcessInstanceComponent', () => {
  let component: MatchFormProcessInstanceComponent;
  let fixture: ComponentFixture<MatchFormProcessInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchFormProcessInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchFormProcessInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
