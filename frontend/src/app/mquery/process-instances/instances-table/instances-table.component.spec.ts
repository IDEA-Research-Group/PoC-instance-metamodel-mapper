import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstancesTableComponent } from './instances-table.component';

describe('InstancesTableComponent', () => {
  let component: InstancesTableComponent;
  let fixture: ComponentFixture<InstancesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstancesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstancesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
