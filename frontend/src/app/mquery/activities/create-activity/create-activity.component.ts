import {Component, OnInit} from '@angular/core';
import {Activity} from '../../../models/activity';
import {ActivitiesService} from '../../../services/activities/activities.service';
import {ProcessDefinitionsService} from '../../../services/processDefinitions/process-definitions.service';
import {ToasterService} from 'angular2-toaster';
import {ProcessDefinition} from '../../../models/processDefinition';

@Component({
  selector: 'ngx-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.scss']
})
export class CreateActivityComponent implements OnInit {

  activity: Activity;
  processDefinitions: ProcessDefinition[];

  constructor(private activityService: ActivitiesService,
              private processDefinitionsService: ProcessDefinitionsService,
              private toasterService: ToasterService) { }

  ngOnInit() {
    this.activity = new Activity();
    this.getProcDefs();
  }

  add(): void {
    this.activityService.store(this.activity)
      .subscribe(res => {
        console.info(res);
      },  error => {
        console.error(error);
        this.toasterService.pop('error', 'Error saving data', 'It\'s not possible to save the process. Retry later.');
      });
  }

  getProcDefs() {
    this.processDefinitionsService.getProcDefs()
      .subscribe(res => {
        console.info(res);
        this.processDefinitions = res.data.processes;
        // this.processEngine = definitions_data.data.engine;
      });
  }

}
