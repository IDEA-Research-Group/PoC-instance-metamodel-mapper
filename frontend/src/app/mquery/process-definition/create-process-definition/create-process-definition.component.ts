import { Component, OnInit } from '@angular/core';
import {ProcessDefinition} from '../../../models/processDefinition';
import {ProcessDefinitionsService} from '../../../services/processDefinitions/process-definitions.service';
import {ProcessEngine} from '../../../models/processEngine';
import {ProcessesEnginesService} from '../../../services/processEngines/processes-engines.service';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'ngx-create-process-definition',
  templateUrl: './create-process-definition.component.html',
  styleUrls: ['./create-process-definition.component.scss'],
})
export class CreateProcessDefinitionComponent implements OnInit {

  processDefinition: ProcessDefinition;
  processesEngines: ProcessEngine[];
  constructor(private processDefinitionsService: ProcessDefinitionsService,
              private processEngineService: ProcessesEnginesService,
              private toasterService: ToasterService) { }

  ngOnInit() {
    this.processDefinition = new ProcessDefinition();
    this.getProcEngs();
  }
  add(): void {
    this.processDefinitionsService.addProcDefs(this.processDefinition)
      .subscribe(processDefinition => {
        console.info(processDefinition);
        this.toasterService.pop('success', 'Process Saved', 'It has been saved');
      }, error => {
        console.error(error);
        this.toasterService.pop('error', 'Error saving data', 'It\'s not possible to save the process. Retry later.');
      });
  }
  getProcEngs(): void {
    this.processEngineService.getProcEngs()
      .subscribe(processesEngines => {
        console.info(processesEngines);
        console.info(processesEngines.data.engines);
        this.processesEngines = processesEngines.data.engines;
        console.warn(this.processesEngines);
      }, error => {
        console.error(error);
        this.toasterService.pop('error', 'Error getting data', 'It\'s not possible to retrieve the engines. Retry later.');
      });
  }
}
