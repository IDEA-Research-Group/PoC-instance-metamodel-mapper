import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProcessDefinitionsComponent } from './list-process-definitions.component';

describe('ListProcessDefinitionsComponent', () => {
  let component: ListProcessDefinitionsComponent;
  let fixture: ComponentFixture<ListProcessDefinitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProcessDefinitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProcessDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
