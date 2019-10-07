import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProcessDefinition} from '../../../models/processDefinition';
import {Router} from '@angular/router';
import {ProcessEngine} from '../../../models/processEngine';

@Component({
  selector: 'ngx-card-process-definition',
  templateUrl: './card-process-definition.component.html',
  styleUrls: ['./card-process-definition.component.scss'],
})
export class CardProcessDefinitionComponent implements OnInit {
  @Input() processDefinition: ProcessDefinition;
  @Input() processEngines: ProcessEngine[];
  @Output() deleted   = new EventEmitter();
  @Output() edited    = new EventEmitter();
  flipped: boolean    = false;
  constructor(private router: Router,
  ) { }

  ngOnInit() {
  }

  delete() {
    this.deleted.emit(this.processDefinition);
  }
  update() {
    console.info('enviando evento de actualizacion');
    this.edited.emit(this.processDefinition);
  }
  view() {
    this.router.navigate([`/mquery/processDefinition/${this.processDefinition.id}/activities`]);
  }
  details() {
    this.router.navigate([`/mquery/processDefinitions/${this.processDefinition.id}/details`]);
  }
}
