import {Component, Input, OnInit} from '@angular/core';
import {ProcessDefinition} from '../../../models/processDefinition';
import {ProcessDefinitionsService} from '../../../services/processDefinitions/process-definitions.service';

@Component({
  selector: 'ngx-update-process-definition',
  templateUrl: './update-process-definition.component.html',
  styleUrls: ['./update-process-definition.component.scss'],
})
export class UpdateProcessDefinitionComponent implements OnInit {
  @Input()
  processDefinition: ProcessDefinition;
  constructor(private processDefinitionsService: ProcessDefinitionsService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.info('sending');
    this.update(this.processDefinition);
  }
  update(processDefinition: ProcessDefinition): void {
    if (!processDefinition) { return; }
    this.processDefinitionsService.updateProcDef(processDefinition)
      .subscribe(proc_def => {
        console.info(proc_def);
        // this.processDefinition = processDefinition;
      });
  }

}
