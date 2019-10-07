import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesInstancesRoutingModule } from './activities-instances-routing.module';
import { TableActivitiesInstancesComponent } from './table-activities-instances/table-activities-instances.component';
import {ThemeModule} from '../../@theme/theme.module';
import {MiscellaneousModule} from '../../pages/miscellaneous/miscellaneous.module';
import {NbActionsModule, NbAlertModule} from '@nebular/theme';
import {FormsModule} from '@angular/forms';
import {ToasterModule} from 'angular2-toaster';
import {ActivitiesModule} from '../activities/activities.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ChartModule} from 'angular2-chartjs';
import { ActivitiesInstancesStatisticsComponent } from './activities-instances-statistics/activities-instances-statistics.component';
import { ActivitiesInstancesPieStatisticsComponent } from './activities-instances-pie-statistics/activities-instances-pie-statistics.component';
import { ViewActivityInstanceComponent } from './view-activity-instance/view-activity-instance.component';
import { ActivitiesInstancesLineDateStatisticsComponent } from './activities-instances-line-date-statistics/activities-instances-line-date-statistics.component';

@NgModule({
  imports: [
    CommonModule,
    ActivitiesInstancesRoutingModule,
    ThemeModule,
    MiscellaneousModule,
    NbAlertModule,
    NbActionsModule,
    FormsModule,
    ToasterModule.forRoot(),
    ActivitiesModule,
    Ng2SmartTableModule,
    ThemeModule, NgxEchartsModule, NgxChartsModule, ChartModule
  ],
  declarations: [TableActivitiesInstancesComponent, ActivitiesInstancesStatisticsComponent, ActivitiesInstancesPieStatisticsComponent, ViewActivityInstanceComponent, ActivitiesInstancesLineDateStatisticsComponent],
  exports: [
    TableActivitiesInstancesComponent,
    ActivitiesInstancesStatisticsComponent,
    ActivitiesInstancesPieStatisticsComponent,
    ActivitiesInstancesLineDateStatisticsComponent,
  ]
})
export class ActivitiesInstancesModule { }
