import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcessInstanceComponent } from './view-process-instance.component';

describe('ViewProcessInstanceComponent', () => {
  let component: ViewProcessInstanceComponent;
  let fixture: ComponentFixture<ViewProcessInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProcessInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcessInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
