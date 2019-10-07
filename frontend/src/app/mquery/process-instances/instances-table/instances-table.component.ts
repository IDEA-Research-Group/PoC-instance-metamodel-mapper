import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'ngx-instances-table',
  templateUrl: './instances-table.component.html',
  styleUrls: ['./instances-table.component.scss'],
  providers: [DatePipe]
})
export class InstancesTableComponent implements OnInit, AfterViewInit, OnChanges {

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      suspended: {
        title: 'Suspended',
        type: 'boolean',
      },
      ended: {
        title: 'Ended',
        type: 'boolean',
      },
      startUserId: {
        title: 'User Who Started',
        type: 'string',
      },
      startTime: {
        title: 'Start Time',
        type: 'date',
        valuePrepareFunction: (date) => {
          if ( !date ) {
            return date;
          }
          let raw = new Date(date);

          let formatted = this.datePipe.transform(raw, 'dd MMM yyyy');
          return formatted;
        }
      },
      endTime: {
        title: 'End Time',
        type: 'date',
        valuePrepareFunction: (date) => {
          if ( !date ) {
            return date;
          }
          let raw = new Date(date);

          let formatted = this.datePipe.transform(raw, 'dd MMM yyyy');
          return formatted;
        }
      },
      durationInMillis: {
        title: 'Duration (ms)',
        type: 'number',
      },
      definitionId: {
        title: 'Definition',
        type: 'number',
      },
      businessKey: {
        title: 'BusinessKey',
        type: 'string',
      }
    },
  };

  @Input() instances: any[] =  [];
  source: LocalDataSource;

  constructor( private router: Router,
               private datePipe: DatePipe) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['instances']) {
      this.source = new LocalDataSource(this.instances);
      console.warn('TENGO LAS INSTANCIAS');
      console.info(this.instances);
    }
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'suspended',
        search: query
      },
      {
        field: 'startUserId',
        search: query
      },
      {
        field: 'startTime',
        search: query
      },
      {
        field: 'ended',
        search: query
      },
      {
        field: 'endTime',
        search: query
      },
      {
        field: 'durationInMillis',
        search: query
      },
      {
        field: 'definitionId',
        search: query
      },
      {
        field: 'businessKey',
        search: query
      }
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

  onClickView(event) {
    this.router.navigate([`/mquery/process-instance/${event.data.id}/`]);
  }
}
