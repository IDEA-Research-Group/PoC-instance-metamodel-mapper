import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'ngx-table-activities-instances',
  templateUrl: './table-activities-instances.component.html',
  styleUrls: ['./table-activities-instances.component.scss']
})
export class TableActivitiesInstancesComponent implements OnInit, OnChanges {

  settings = {
    actions: { add: false, edit: false, delete: false },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      activityName: {
        title: 'Name',
        type: 'string',
      },
      startTime: {
        title: 'Start Time',
        type: 'date',
      },
      endTime: {
        title: 'End Time',
        type: 'date',
      },
      duration: {
        title: 'Duration (ms)',
        type: 'number',
      },
      canceled: {
        title: 'Canceled',
        type: 'boolean',
      },
      completedScope: {
        title: 'Completed Scope',
        type: 'boolean',
      },
      assignee: {
        title: 'Assignee',
        type: 'string',
      },
      processDefinitionId: {
        title: 'Process Definition',
        type: 'number'
      },
      processInstanceId: {
        title: 'Process Instance',
        type: 'string'
      },
      activityId: {
        title: 'Activity',
        type: 'number',
      }
    },
  };

  @Input() instances: any[] =  [];
  source: LocalDataSource;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['instances']) {
      this.source = new LocalDataSource(this.instances);
      console.warn('TENGO LAS INSTANCIAS DE ACTIVIDADES');
      console.info(this.instances);
    }
  }

}
