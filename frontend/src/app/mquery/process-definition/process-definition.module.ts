import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessDefinitionRoutingModule } from './process-definition-routing.module';
import { ListProcessDefinitionsComponent } from './list-process-definitions/list-process-definitions.component';
import { CreateProcessDefinitionComponent } from './create-process-definition/create-process-definition.component';
import { UpdateProcessDefinitionComponent } from './update-process-definition/update-process-definition.component';
import { FormProcessDefinitionComponent } from './form-process-definition/form-process-definition.component';
import { ListProcessDefinitionsByEngineComponent } from './list-process-definitions-by-engine/list-process-definitions-by-engine.component';
import { CardProcessDefinitionComponent } from './card-process-definition/card-process-definition.component';
import {ThemeModule} from '../../@theme/theme.module';
import {MiscellaneousModule} from '../../pages/miscellaneous/miscellaneous.module';
import {NbActionsModule, NbAlertModule} from '@nebular/theme';
import {FormsModule} from '@angular/forms';
import {ToasterModule} from 'angular2-toaster';
import {ActivitiesModule} from '../activities/activities.module';
import { ViewProcessDefinitionComponent } from './view-process-definition/view-process-definition.component';
import {ProcessInstancesModule} from '../process-instances/process-instances.module';
import { ProcessInstanceStatisticsComponent } from './process-instance-statistics/process-instance-statistics.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ChartModule} from 'angular2-chartjs';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ActivitiesInstancesModule} from '../activities-instances/activities-instances.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    MiscellaneousModule,
    NbAlertModule,
    NbActionsModule,
    ProcessDefinitionRoutingModule,
    FormsModule,
    ToasterModule.forRoot(),
    ActivitiesModule,
    ActivitiesInstancesModule,
    ProcessInstancesModule,
    Ng2SmartTableModule,
    ThemeModule, NgxEchartsModule, NgxChartsModule, ChartModule
  ],
  declarations: [ListProcessDefinitionsComponent,
    CreateProcessDefinitionComponent,
    UpdateProcessDefinitionComponent,
    FormProcessDefinitionComponent,
    ListProcessDefinitionsByEngineComponent,
    CardProcessDefinitionComponent,
    ViewProcessDefinitionComponent,
    ProcessInstanceStatisticsComponent]
})
export class ProcessDefinitionModule { }
