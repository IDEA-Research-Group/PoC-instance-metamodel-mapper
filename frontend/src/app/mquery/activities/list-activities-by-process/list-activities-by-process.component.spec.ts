import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActivitiesByProcessComponent } from './list-activities-by-process.component';

describe('ListActivitiesByProcessComponent', () => {
  let component: ListActivitiesByProcessComponent;
  let fixture: ComponentFixture<ListActivitiesByProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListActivitiesByProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActivitiesByProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
