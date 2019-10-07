import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableActivitiesInstancesComponent } from './table-activities-instances.component';

describe('TableActivitiesInstancesComponent', () => {
  let component: TableActivitiesInstancesComponent;
  let fixture: ComponentFixture<TableActivitiesInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableActivitiesInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableActivitiesInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
