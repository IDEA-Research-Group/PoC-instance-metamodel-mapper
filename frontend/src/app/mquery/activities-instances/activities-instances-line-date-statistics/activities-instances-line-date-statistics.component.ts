import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'ngx-activities-instances-line-date-statistics',
  templateUrl: './activities-instances-line-date-statistics.component.html',
  styleUrls: ['./activities-instances-line-date-statistics.component.scss']
})
export class ActivitiesInstancesLineDateStatisticsComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() date_statistics;
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngOnInit() {
  }
  ngAfterViewInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['date_statistics']) {
      this.genOptions();
    }
  }

  setDataSeries() {
    this.options.series[0].name = 'Activities Started per day';
    console.error('EL TIPO ES');
    console.error( typeof(this.date_statistics));
    let keys = Object.keys(this.date_statistics);
    let values = Object.values(this.date_statistics);
    console.info(keys);
    console.info(values);
    console.info(this.options.xAxis);
    console.info(this.options.xAxis[0]);
    console.info(this.options.xAxis[0].data);
    // let keys = this.date_statistics.map((key, value) => {
    //   return key;
    // });
    // console.error('Las kesys son:');
    // console.error(keys);key
    this.options.xAxis[0].data = keys;
    this.options.series[0].data = values;
  }

  genOptions() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.infoLight, colors.warningLight,  colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: echarts.tooltipBackgroundColor,
            },
          },
        },
        legend: {
          data: ['Activities Started per day'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: [],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'Activities started per day',
            type: 'line',
            stack: 'Total amount',
            areaStyle: { normal: { opacity: echarts.areaOpacity } },
            data: [],
          },
        ],
      };
      this.setDataSeries();

    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
