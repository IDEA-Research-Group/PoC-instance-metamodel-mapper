import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesInstancesPieStatisticsComponent } from './activities-instances-pie-statistics.component';

describe('ActivitiesInstancesPieStatisticsComponent', () => {
  let component: ActivitiesInstancesPieStatisticsComponent;
  let fixture: ComponentFixture<ActivitiesInstancesPieStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesInstancesPieStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesInstancesPieStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
