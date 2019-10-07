import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ViewActivityComponent } from './view-activity/view-activity.component';
import { CardActivityComponent } from './card-activity/card-activity.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import { ListActivitiesComponent } from './list-activities/list-activities.component';
import { ListActivitiesByProcessComponent } from './list-activities-by-process/list-activities-by-process.component';
import { FormActivityComponent } from './form-activity/form-activity.component';
import { UpdateActivityComponent } from './update-activity/update-activity.component';
import {ThemeModule} from '../../@theme/theme.module';
import {MiscellaneousModule} from '../../pages/miscellaneous/miscellaneous.module';
import {NbActionsModule, NbAlertModule} from '@nebular/theme';
import {FormsModule} from '@angular/forms';
import {ToasterModule} from 'angular2-toaster';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    MiscellaneousModule,
    NbAlertModule,
    NbActionsModule,
    FormsModule,
    ToasterModule.forRoot(),
    ActivitiesRoutingModule
  ],
  declarations: [
    ViewActivityComponent,
    CardActivityComponent,
    CreateActivityComponent,
    ListActivitiesComponent,
    ListActivitiesByProcessComponent,
    FormActivityComponent,
    UpdateActivityComponent,
  ],
  exports: [
    ListActivitiesComponent,
    CommonModule,
  ],
})
export class ActivitiesModule { }
