import { Component, OnInit } from '@angular/core';
import {ProcessDefinitionsService} from '../../../services/processDefinitions/process-definitions.service';
import {ProcessEngine} from '../../../models/processEngine';
import {ProcessDefinition} from '../../../models/processDefinition';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ngx-list-process-definitions-by-engine',
  templateUrl: './list-process-definitions-by-engine.component.html',
  styleUrls: ['./list-process-definitions-by-engine.component.scss'],
})
export class ListProcessDefinitionsByEngineComponent implements OnInit {

  engine: ProcessEngine;
  processDefinitions: ProcessDefinition[];

  constructor(private processDefinitionService: ProcessDefinitionsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRouteEngine();
  }

  getRouteEngine() {
    this.route.paramMap.subscribe(params => {
      const process_engine_id = params.get('process_engine_id');
      console.info(process_engine_id);
      this.getDefinitions(process_engine_id);
    });
  }
  getDefinitions(process_engine_id) {
    this.processDefinitionService.getProcDefsById(process_engine_id).subscribe(engine_details => {
      console.info(engine_details);
      this.processDefinitions = engine_details.success ? engine_details.data.processes : null;
      this.engine             = engine_details.success ? engine_details.data.engine : null;
    });
  }

}
