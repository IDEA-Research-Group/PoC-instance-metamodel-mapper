import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ProcessDefinition} from '../../../models/processDefinition';
import {Activity} from '../../../models/activity';
import {ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import {ActivitiesService} from '../../../services/activities/activities.service';
import {ProcessDefinitionsService} from '../../../services/processDefinitions/process-definitions.service';

@Component({
  selector: 'ngx-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss']
})
export class ListActivitiesComponent implements OnInit, AfterViewInit {

  @Input() activities: Activity[];
  @Input() process: ProcessDefinition;
  processDefinitions: ProcessDefinition[];
  constructor( private activitiesService: ActivitiesService,
               private processDefinitionsService: ProcessDefinitionsService,
               private toastService: ToasterService,
               private router: Router ) { }

  ngOnInit() {
    if (typeof (this.activities) === 'undefined' ) {
      this.getActivities();
    }
    this.getProcDefs();
  }

  ngAfterViewInit() {
    if (typeof (this.activities) === 'undefined' ) {
      this.getActivities();
    }
  }

  getProcDefs() {
    this.processDefinitionsService.getProcDefs()
      .subscribe(definitions_data => {
        console.info(definitions_data);
        this.processDefinitions = definitions_data.data.processes;
        // this.processEngine = definitions_data.data.engine;
      });
  }

  new() {
    this.router.navigate([ '/mquery/activities/create']);
  }

  getActivities() {
    this.activitiesService.getAll()
      .subscribe(res => {
        this.activities = res.data.activities;
      });
  }

  delete(activity: Activity): void {
    console.warn('borrando');
    this.activitiesService.delete(activity)
      .subscribe(res => {
        this.activities = this.activities.filter((elem) => {
          return elem !== activity;
        });
        this.toastService.pop('success', 'Deleted', 'Activity has been deleted');
      });
  }

  update(activity: Activity): void {
    console.info('Actualizando!');
    if (!activity) { return; }
    this.activitiesService.update(activity)
      .subscribe(res => {
        console.info(res);
        this.activities.forEach( (value) => {
          if (value.id === res.id && value.updated_at == res.updated_at) {
            this.toastService.pop('warning', 'Not Updated', 'Any field has been edited');
            return;
          }else if (value.id === res.id && value.updated_at !== res.updated_at) {
            this.toastService.pop('success', 'Updated', 'Activity has been updated');
            return;
          }
        });
      });
  }
}
