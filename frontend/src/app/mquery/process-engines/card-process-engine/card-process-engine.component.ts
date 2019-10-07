import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProcessEngine} from '../../../models/processEngine';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-card-process-engine',
  templateUrl: './card-process-engine.component.html',
  styleUrls: ['./card-process-engine.component.scss'],
})
export class CardProcessEngineComponent implements OnInit {
  @Input()
  processEngine: ProcessEngine;
  @Output() deleted   = new EventEmitter();
  @Output() edited    = new EventEmitter();
  flipped: boolean    = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  delete() {
    this.deleted.emit(this.processEngine);
  }
  update() {
    this.edited.emit(this.processEngine);
  }
  view() {
    this.router.navigate([ `/mquery/engine/${this.processEngine.id}/processDefinitions`]);
  }

}
