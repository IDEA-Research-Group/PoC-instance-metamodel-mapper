import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesInstancesLineDateStatisticsComponent } from './activities-instances-line-date-statistics.component';

describe('ActivitiesInstancesLineDateStatisticsComponent', () => {
  let component: ActivitiesInstancesLineDateStatisticsComponent;
  let fixture: ComponentFixture<ActivitiesInstancesLineDateStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesInstancesLineDateStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesInstancesLineDateStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
