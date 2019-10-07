import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivityInstanceComponent } from './view-activity-instance.component';

describe('ViewActivityInstanceComponent', () => {
  let component: ViewActivityInstanceComponent;
  let fixture: ComponentFixture<ViewActivityInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivityInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivityInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
