import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessInstancesRoutingModule } from './process-instances-routing.module';
import { CardProcessInstanceComponent } from './card-process-instance/card-process-instance.component';
import { FormProcessInstanceComponent } from './form-process-instance/form-process-instance.component';
import { MatchProcessInstanceComponent } from './match-process-instance/match-process-instance.component';
import { MatchFormProcessInstanceComponent } from './match-form-process-instance/match-form-process-instance.component';
import { InstancesTableComponent } from './instances-table/instances-table.component';
import {ThemeModule} from '../../@theme/theme.module';
import {MiscellaneousModule} from '../../pages/miscellaneous/miscellaneous.module';
import {NbActionsModule, NbAlertModule} from '@nebular/theme';
import {FormsModule} from '@angular/forms';
import {ToasterModule} from 'angular2-toaster';
import {ProcessDefinitionRoutingModule} from '../process-definition/process-definition-routing.module';
import {ActivitiesModule} from '../activities/activities.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ChartModule} from 'angular2-chartjs';
import { ViewProcessInstanceComponent } from './view-process-instance/view-process-instance.component';
import {ActivitiesInstancesModule} from '../activities-instances/activities-instances.module';

@NgModule({
  imports: [
    CommonModule,
    MiscellaneousModule,
    NbAlertModule,
    NbActionsModule,
    FormsModule,
    ProcessInstancesRoutingModule,
    ThemeModule,
    MiscellaneousModule,
    NbAlertModule,
    NbActionsModule,
    ProcessDefinitionRoutingModule,
    FormsModule,
    ActivitiesModule,
    Ng2SmartTableModule,
    ThemeModule, NgxEchartsModule, NgxChartsModule, ChartModule,
    ToasterModule.forRoot(),
    ActivitiesInstancesModule,
  ],
  declarations: [CardProcessInstanceComponent, FormProcessInstanceComponent, MatchProcessInstanceComponent, MatchFormProcessInstanceComponent, InstancesTableComponent, ViewProcessInstanceComponent],
  exports: [
    CardProcessInstanceComponent,
    FormProcessInstanceComponent,
    MatchProcessInstanceComponent,
    MatchFormProcessInstanceComponent,
    InstancesTableComponent,
    CommonModule,
  ],
})
export class ProcessInstancesModule { }
