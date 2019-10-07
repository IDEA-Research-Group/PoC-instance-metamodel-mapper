import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessInstanceStatisticsComponent } from './process-instance-statistics.component';

describe('ProcessInstanceStatisticsComponent', () => {
  let component: ProcessInstanceStatisticsComponent;
  let fixture: ComponentFixture<ProcessInstanceStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessInstanceStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessInstanceStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
