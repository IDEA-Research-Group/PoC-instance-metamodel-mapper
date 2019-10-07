import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesInstancesStatisticsComponent } from './activities-instances-statistics.component';

describe('ActivitiesInstancesStatisticsComponent', () => {
  let component: ActivitiesInstancesStatisticsComponent;
  let fixture: ComponentFixture<ActivitiesInstancesStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesInstancesStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesInstancesStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
