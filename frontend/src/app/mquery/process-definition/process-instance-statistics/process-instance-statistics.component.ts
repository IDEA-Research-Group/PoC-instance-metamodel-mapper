import { Component, OnInit } from '@angular/core';
import {ProcessDefinitionsService} from '../../../services/processDefinitions/process-definitions.service';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'ngx-process-instance-statistics',
  templateUrl: './process-instance-statistics.component.html',
  styleUrls: ['./process-instance-statistics.component.scss']
})
export class ProcessInstanceStatisticsComponent implements OnInit {

  results = [];
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = 'Processes';
  yAxisLabel = 'Instances';
  colorScheme: any;
  themeSubscription: any;

  constructor(private processDefinitionsService: ProcessDefinitionsService,
              private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnInit() {
    this.getProcessInstanceStatistics();
  }

  getProcessInstanceStatistics(): void {
    this.processDefinitionsService.getProcessInstanceStatistics()
      .subscribe(statistics => {
        console.warn('------------------------------------------------------------------------');
        console.info(statistics);
        console.warn('------------------------------------------------------------------------');
        let test =  statistics.map( item => {
          let res = {name: null, value: null};
          console.info(item);
          res.name  = item.definition.name;
          res.value = item.instances;
          console.info('res');
          console.info(res);
          return res;
        });
        this.results = test;
        console.info('test');
        console.info(test);

        // this.processEngine = definitions_data.data.engine;
      });
  }

}
