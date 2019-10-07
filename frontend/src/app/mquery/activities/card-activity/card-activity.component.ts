import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Activity} from '../../../models/activity';
import {ProcessDefinition} from '../../../models/processDefinition';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-card-activity',
  templateUrl: './card-activity.component.html',
  styleUrls: ['./card-activity.component.scss']
})
export class CardActivityComponent implements OnInit {

  @Input() activity: Activity;
  @Input() processDefinitions: ProcessDefinition[];
  @Output() deleted   = new EventEmitter();
  @Output() edited    = new EventEmitter();
  flipped: boolean    = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  delete() {
    this.deleted.emit(this.activity);
  }
  update() {
    console.info('enviando evento de actualizacion');
    this.edited.emit(this.activity);
  }
  view() {
    this.router.navigate([`/mquery/processDefinition/${this.activity.process_definition_id}/activities`]);
  }

}
