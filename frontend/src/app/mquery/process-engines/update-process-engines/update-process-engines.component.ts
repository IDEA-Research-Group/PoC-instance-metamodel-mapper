import {Component, Input, OnInit} from '@angular/core';
import {ProcessEngine} from '../../../models/processEngine';
import {ProcessesEnginesService} from '../../../services/processEngines/processes-engines.service';

@Component({
  selector: 'ngx-update-process-engines',
  templateUrl: './update-process-engines.component.html',
  styleUrls: ['./update-process-engines.component.scss'],
})
export class UpdateProcessEnginesComponent implements OnInit {
  @Input()
  procEng: ProcessEngine;
  constructor(private processEnginesService: ProcessesEnginesService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.info('sending');
    this.update(this.procEng);
  }
  update(processEngine: ProcessEngine): void {
    if (!processEngine) { return; }
    this.processEnginesService.updateProcEng(processEngine)
      .subscribe(procEng => {
        console.info(procEng);
        // this.procEng = procEng;
      });
  }


}
