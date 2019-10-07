import { Component, OnInit } from '@angular/core';
import {ProcessDefinition} from '../../../models/processDefinition';
import {Activity} from '../../../models/activity';
import {ActivitiesService} from '../../../services/activities/activities.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ngx-list-activities-by-process',
  templateUrl: './list-activities-by-process.component.html',
  styleUrls: ['./list-activities-by-process.component.scss']
})
export class ListActivitiesByProcessComponent implements OnInit {

  process: ProcessDefinition;
  activities: Activity[];

  constructor(private activitiesService: ActivitiesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRoutedProcess();
  }

  private getRoutedProcess() {
    this.route.paramMap.subscribe(params => {
      const process_definition_id = params.get('process_definition_id');
      console.info(process_definition_id);
      this.getActivities(process_definition_id);
    });
  }

  private getActivities(process_definition_id: string) {
    this.activitiesService.getByProcessId(process_definition_id).subscribe(res => {
      console.info(res);
      this.activities = res.success ? res.data.activities : null;
      this.process    = res.success ? res.data.process : null;
    });
  }
}
