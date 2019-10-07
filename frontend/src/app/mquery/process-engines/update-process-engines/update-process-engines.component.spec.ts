import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProcessEnginesComponent } from './update-process-engines.component';

describe('UpdateProcessEnginesComponent', () => {
  let component: UpdateProcessEnginesComponent;
  let fixture: ComponentFixture<UpdateProcessEnginesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProcessEnginesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProcessEnginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
