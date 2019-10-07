import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {ProcessDefinitionsService} from '../../../services/processDefinitions/process-definitions.service';

@Component({
  selector: 'ngx-activities-instances-pie-statistics',
  templateUrl: './activities-instances-pie-statistics.component.html',
  styleUrls: ['./activities-instances-pie-statistics.component.scss']
})
export class ActivitiesInstancesPieStatisticsComponent implements OnInit, OnChanges, OnDestroy {
  single = [];
  colorScheme: any;
  themeSubscription: any;
  @Input() processDefinitionId;
  @Input() activity_statistics;

  constructor(private theme: NbThemeService,
              private _pd: ProcessDefinitionsService) {
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
      res.name  = item.name;
      res.value = item.instances;
      return res;
    });
    this.single = ststistics;
  }


  getActivitiesInstanceStatistics(): void {
    this._pd.getActivityInstanceStatistics(this.processDefinitionId)
      .subscribe(statistics => {
        console.warn('------------------------------------------------------------------------');
        console.info(statistics);
        console.warn('------------------------------------------------------------------------');
        let test =  statistics.map( item => {
          let res = {name: null, value: null};
          res.name  = item.name;
          res.value = item.instances;
          return res;
        });
        this.single = test;
      });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
