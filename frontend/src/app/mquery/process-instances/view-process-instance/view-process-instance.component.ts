import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProcessInstancesService} from '../../../services/process-instances/process-instances.service';
import {ProcessDefinitionsService} from '../../../services/processDefinitions/process-definitions.service';
import {ActivitiesInstancesService} from '../../../services/activities-instances/activities-instances.service';

@Component({
  selector: 'ngx-view-process-instance',
  templateUrl: './view-process-instance.component.html',
  styleUrls: ['./view-process-instance.component.scss']
})
export class ViewProcessInstanceComponent implements OnInit {

  process_instance_id;
  process_instance;
  process_definition;

  activity_statistics;
  param: any[] =  [];
  activities: any[] = [];
  count_activity_instances;
  activity_instances: any[] = [];
  activity_instances_date: any[] = [];

  constructor(private route: ActivatedRoute,
              private _pi: ProcessInstancesService,
              private _pd: ProcessDefinitionsService,
              private _ai: ActivitiesInstancesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.process_instance_id = this.param['processInstanceId'] = params.get('process_instance_id');
      console.info(this.process_instance_id);

      this.getProcessInstance();
      this.getActivityInstancesListCount();
      this.getActivityInstancesStatistics();
      // this.getActivityInstancesList();
    });
  }

  getProcessInstance() {
    this._pi.getOneById(this.process_instance_id).subscribe( res => {
      console.info(res);
      this.process_instance = res;
      this.getProcessDefinition();
    });
  }
  getProcessDefinition() {
    this._pd.getOneById(this.process_instance.definitionId).subscribe( res => {
      console.info(res);
      this.process_definition = res;
    });
  }

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
    this._ai.getListByDate(this.param).subscribe(res => {
      console.warn('Las fechas de actividades son:');
      console.info(res);
      this.activity_instances_date = res;
    });
  }
  getActivityInstancesStatistics() {
    this._pi.getActivityInstancesStatistics(this.process_instance_id).subscribe( res => {
      console.warn('Las estadisticas de actividades son:');
      console.info(res);
      this.activity_statistics = res;
    });
  }

}
