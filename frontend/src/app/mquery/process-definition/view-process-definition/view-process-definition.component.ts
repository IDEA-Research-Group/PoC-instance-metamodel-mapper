import { Component, OnInit } from '@angular/core';
import {ProcessDefinitionsService} from '../../../services/processDefinitions/process-definitions.service';
import {ActivatedRoute} from '@angular/router';
import {ProcessInstancesService} from '../../../services/process-instances/process-instances.service';
import {ActivitiesService} from '../../../services/activities/activities.service';
import {ActivitiesInstancesService} from '../../../services/activities-instances/activities-instances.service';

@Component({
  selector: 'ngx-view-process-definition',
  templateUrl: './view-process-definition.component.html',
  styleUrls: ['./view-process-definition.component.scss']
})
export class ViewProcessDefinitionComponent implements OnInit {

  process_definition_id;
  activity_statistics;
  process;
  count_instances;
  instances: any[] =  [];
  param: any[] =  [];
  activities: any[] = [];
  count_activity_instances;
  activity_instances: any[] = [];
  constructor(private _pd: ProcessDefinitionsService,
              private _pi: ProcessInstancesService,
              private _a: ActivitiesService,
              private _ai: ActivitiesInstancesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // Get Route param id to load the resource
    // this.route.params.subscribe(routeParams => {
    //   this.getActivityInstanceStatistics();
    // });
    this.route.paramMap.subscribe(params => {
      const process_definition_id = params.get('process_definition_id');
      this.process_definition_id = process_definition_id;
      this.param['processDefinitionId'] = process_definition_id;
      this.getActivityInstanceStatistics();
      this.getDefinition();
      this.getInstancesCount();
      this.getInstancesList();
      this.getActivities();
      this.getActivityInstancesListCount();
      // this.getActivityInstancesList();
    });
  }

  // obtaining the process of the view
  getDefinition() {
    this._pd.getOneById(this.process_definition_id).subscribe( res => {
      console.warn('La definition es:');
      console.info(res);
      this.process = res;
    });
  }
  // Count Process Instances of this definition
  getInstancesCount() {
    this._pi.getListCount(this.param).subscribe( res => {
      console.warn('El contador es:');
      console.info(res);
      this.count_instances = res.count;
    });
  }
  // List Process Instances of this definition
  getInstancesList() {
    this._pi.getList(this.param).subscribe( res => {
      console.warn('La lista es:');
      console.info(res);
      this.instances = res;
    });
  }
  // Activities of this definition
  getActivities() {
    this._a.getByProcessId(this.process_definition_id).subscribe( res => {
      console.warn('Las actividades son:');
      console.info(res);
      this.activities = res.data.activities;
    });
  }
  // Instancias de actividades
  getActivityInstancesListCount() {
    this._ai.getListCount(this.param).subscribe( res => {
      console.warn('El contador de instancias de actividades es:');
      console.info(res);
      this.count_activity_instances = res.count;
    });
  }
  getActivityInstancesList() {
    this._ai.getList(this.param).subscribe( res => {
      console.warn('Las instancias de actividades son:');
      console.info(res);
      this.activity_instances = res;
    });
  }
  getActivityInstanceStatistics() {
    this._pd.getActivityInstanceStatistics(this.process_definition_id).subscribe( res => {
      console.info(res);
      this.activity_statistics = res;
    });
  }



}
