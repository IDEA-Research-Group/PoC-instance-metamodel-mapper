import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProcessDefinitionComponent } from './card-process-definition.component';

describe('CardProcessDefinitionComponent', () => {
  let component: CardProcessDefinitionComponent;
  let fixture: ComponentFixture<CardProcessDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProcessDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProcessDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
