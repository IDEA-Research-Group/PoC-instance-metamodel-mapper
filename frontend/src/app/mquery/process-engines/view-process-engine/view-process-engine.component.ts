import {Component, OnInit} from '@angular/core';
import {ProcessEngine} from '../../../models/processEngine';
import { ActivatedRoute } from '@angular/router';
import {ProcessesEnginesService} from '../../../services/processEngines/processes-engines.service';

@Component({
  selector: 'ngx-view-process-engine',
  templateUrl: './view-process-engine.component.html',
  styleUrls: ['./view-process-engine.component.scss'],
})
export class ViewProcessEngineComponent implements OnInit {

  processEngine: ProcessEngine;
  constructor(private route: ActivatedRoute,
              private processEngineService: ProcessesEnginesService) { }

  ngOnInit() {
    // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      const id_proc = params.get('id');
       console.info(id_proc);
       this.processEngineService.getProcEng(id_proc).subscribe(res => {
         console.info(res);
         this.processEngine = res.success ? res.data.engine : null;
       });
     });
  }

}
