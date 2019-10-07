import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProcessEngine} from '../../../models/processEngine';
import {ProcessDefinitionsService} from '../../../services/processDefinitions/process-definitions.service';
import {ToasterService} from 'angular2-toaster';
import {ProcessDefinition} from '../../../models/processDefinition';
import {Router} from '@angular/router';
import {ProcessesEnginesService} from '../../../services/processEngines/processes-engines.service';

@Component({
  selector: 'ngx-list-process-definitions',
  templateUrl: './list-process-definitions.component.html',
  styleUrls: ['./list-process-definitions.component.scss'],
})
export class ListProcessDefinitionsComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() processesDefinitions: ProcessDefinition[] = [];
  @Input() processEngine: ProcessEngine;
  processesEngines: ProcessEngine[];

  constructor( private processDefinitionsService: ProcessDefinitionsService,
               private processEngineService: ProcessesEnginesService,
               private toastService: ToasterService,
               private router: Router) { }

  ngOnInit() {
    this.getProcEngs();
    setTimeout(this.getProcDefs(), 3000);
  }

  ngAfterViewInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['processesDefinitions']) {
      this.processesDefinitions = changes['processesDefinitions'].currentValue;
    }
  }

  getProcDefs() {
    this.processDefinitionsService.getProcDefs()
      .subscribe(definitions_data => {
        console.info(definitions_data);
        this.processesDefinitions = definitions_data.data.processes;
        // this.processEngine = definitions_data.data.engine;
      });
  }
  getProcEngs(): void {
    if ( !this.processesDefinitions
      || this.processesDefinitions.length > 0
      || ( this.processesDefinitions.length == 0 && this.processEngine) ) {
      return;
    }

    this.processEngineService.getProcEngs()
      .subscribe(processesEngines => {
        console.info(processesEngines);
        console.info(processesEngines.data.engines);
        this.processesEngines = processesEngines.data.engines;
        console.warn(this.processesEngines);
      }, error => {
        console.error(error);
        this.toastService.pop('error', 'Error getting data', 'It\'s not possible to retrieve the engines. Retry later.');
      });
  }
  new() {
      this.router.navigate([ '/mquery/processDefinitions/create']);
    }
  update(processDefinition: ProcessDefinition): void {
    console.info('Actualizando!');
    if (!processDefinition) { return; }
    this.processDefinitionsService.updateProcDef(processDefinition)
      .subscribe(procDef => {
        console.info(procDef);
        this.processesDefinitions.forEach( (value) => {
          if (value.id === procDef.id && value.updated_at == procDef.updated_at) {
            this.toastService.pop('warning', 'Not Updated', 'Any field has been edited');
            return;
          }else if (value.id === procDef.id && value.updated_at !== procDef.updated_at) {
            this.toastService.pop('success', 'Updated', 'Process has been updated');
            return;
          }
        });
      });
  }

  delete(processDefinition: ProcessDefinition ) {
    console.warn('borrando');
    this.processDefinitionsService.deleteProcDef(processDefinition)
      .subscribe(res => {
        this.processesDefinitions = this.processesDefinitions.filter((elem) => {
          return elem !== processDefinition;
        });
        this.toastService.pop('success', 'Deleted', 'Process Dedinition has been deleted');
      });
  }
}
