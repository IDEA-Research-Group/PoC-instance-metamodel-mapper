import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProcessDefinitionsService} from '../../../services/processDefinitions/process-definitions.service';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'ngx-activities-instances-statistics',
  templateUrl: './activities-instances-statistics.component.html',
  styleUrls: ['./activities-instances-statistics.component.scss']
})
export class ActivitiesInstancesStatisticsComponent implements OnInit, OnChanges {

  results = [];
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = 'Activities';
  yAxisLabel = 'Instances';
  colorScheme: any;
  themeSubscription: any;
  @Input() processDefinitionId;
  @Input() activity_statistics;

  constructor(private _pd: ProcessDefinitionsService,
              private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnInit() {
    // this.getActivitiesInstanceStatistics();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activity_statistics']) {
      this.generateDataForGraph();
    }
  }

  generateDataForGraph() {
    let ststistics =  this.activity_statistics.map( item => {
      let res = {name: null, value: null};
      console.info(item);
      res.name  = item.name;
      res.value = item.instances;
      console.info('res');
      console.info(res);
      return res;
    });
    this.results = ststistics;
  }

  getActivitiesInstanceStatistics(): void {
    this._pd.getActivityInstanceStatistics(this.processDefinitionId)
      .subscribe(statistics => {
        console.warn('------------------------------------------------------------------------');
        console.info(statistics);
        console.warn('------------------------------------------------------------------------');
        let test =  statistics.map( item => {
          let res = {name: null, value: null};
          console.info(item);
          res.name  = item.name;
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
