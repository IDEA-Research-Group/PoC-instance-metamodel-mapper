import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MqueryRoutingModule } from './mquery-routing.module';
import { ProcessEnginesModule } from './process-engines/process-engines.module';
import {MQueryComponent} from './mquery.component';
import {DashboardModule} from '../pages/dashboard/dashboard.module';
import {ThemeModule} from '../@theme/theme.module';
import {MiscellaneousModule} from '../pages/miscellaneous/miscellaneous.module';
import {FormsModule} from '@angular/forms';
import { ProcessDefinitionModule } from './process-definition/process-definition.module';
import { ActivitiesModule } from './activities/activities.module';
import { ProcessInstancesModule } from './process-instances/process-instances.module';
import {ActivitiesInstancesModule} from './activities-instances/activities-instances.module';


const MQUERY_COMPONENTS = [
  MQueryComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    DashboardModule,
    CommonModule,
    MiscellaneousModule,
    MqueryRoutingModule,
    ProcessEnginesModule,
    FormsModule,
    ProcessDefinitionModule,
    ActivitiesModule,
    ProcessInstancesModule,
    ActivitiesInstancesModule,
  ],
  declarations: [
    ...MQUERY_COMPONENTS,
  ],
})
export class MqueryModule { }
