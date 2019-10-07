import { Component, OnInit } from '@angular/core';
import {ProcessesEnginesService} from '../../../services/processEngines/processes-engines.service';
import {ProcessEngine} from '../../../models/processEngine';
import {ToasterService} from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-list-process-engine',
  templateUrl: './list-process-engine.component.html',
  styleUrls: ['./list-process-engine.component.scss'],
})
export class ListProcessEngineComponent implements OnInit {

  processesEngines: ProcessEngine[];
  constructor(private processEngineService: ProcessesEnginesService,
              private toasterService: ToasterService,
              private router: Router) { }

  ngOnInit() {
    this.getProcEngs();
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
          this.toasterService.pop('error', 'Error getting data', 'It\'s not porssible to retrieve the engines. Retry later.');
        });
  }

  new() {
    this.router.navigate([ `/mquery/engines/create`]);
  }

  delete(processEngine: ProcessEngine) {
    console.warn('borrando');
    this.processEngineService.delete(processEngine)
      .subscribe(res => {
        console.info(res);
        this.processesEngines = this.processesEngines.filter((elem) => {
          return elem !== processEngine;
        });
        this.toasterService.pop('success', 'Deleted', 'Process Engine has been deleted');
      });
  }

  update(processEngine: ProcessEngine): void {
    if (!processEngine) { return; }
    this.processEngineService.updateProcEng(processEngine)
      .subscribe(procEng => {
        console.info(procEng);
        this.processesEngines.forEach( (value) => {
          if (value.id === procEng.id && value.updated_at == procEng.updated_at) {
            this.toasterService.pop('warning', 'Not Updated', 'Any field has been edited');
            return;
          }else if (value.id === procEng.id && value.updated_at !== procEng.updated_at) {
            this.toasterService.pop('success', 'Updated', 'Process has been updated');
            return;
          }
        });
        // this.procEng = procEng;
      });
  }

}
