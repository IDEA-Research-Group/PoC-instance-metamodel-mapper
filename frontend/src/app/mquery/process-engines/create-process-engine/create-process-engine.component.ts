import { Component, OnInit } from '@angular/core';
import {ProcessesEnginesService} from '../../../services/processEngines/processes-engines.service';
import {ProcessEngine} from '../../../models/processEngine';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'ngx-create-process-engine',
  templateUrl: './create-process-engine.component.html',
  styleUrls: ['./create-process-engine.component.scss'],
})
export class CreateProcessEngineComponent implements OnInit {

  procEng: ProcessEngine;
  constructor(private processEnginesService: ProcessesEnginesService,
              private toasterService: ToasterService) { }

  ngOnInit() {
    this.procEng = new ProcessEngine();
  }


  add(): void {
    this.processEnginesService.addProcEng(this.procEng)
      .subscribe(procEng => {
          console.info(procEng);
          this.toasterService.pop('success', 'Saved', 'Process Engine has been saved');
      }, (error) => this.toasterService.pop('error', 'Error', 'Process Engine has not been saved'));
  }

}
