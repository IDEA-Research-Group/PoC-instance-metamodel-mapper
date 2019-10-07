import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessEnginesRoutingModule } from './process-engines-routing.module';
import { CreateProcessEngineComponent } from './create-process-engine/create-process-engine.component';
import { ListProcessEngineComponent } from './list-process-engine/list-process-engine.component';
import { ViewProcessEngineComponent } from './view-process-engine/view-process-engine.component';
import {ProcessEngineComponent} from './process-engine.component';
import {ThemeModule} from '../../@theme/theme.module';
import {MiscellaneousModule} from '../../pages/miscellaneous/miscellaneous.module';
import {FormsModule} from '@angular/forms';
import { FormProcessEnginesComponent } from './form-process-engines/form-process-engines.component';
import {NbActionsModule, NbAlertModule} from '@nebular/theme';
import { UpdateProcessEnginesComponent } from './update-process-engines/update-process-engines.component';
import {ToasterModule} from 'angular2-toaster';
import { CardProcessEngineComponent } from './card-process-engine/card-process-engine.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    MiscellaneousModule,
    NbAlertModule,
    NbActionsModule,
    ProcessEnginesRoutingModule,
    FormsModule,
    ToasterModule.forRoot(),
  ],
  declarations: [
    CreateProcessEngineComponent,
    ListProcessEngineComponent,
    ViewProcessEngineComponent,
    ProcessEngineComponent,
    FormProcessEnginesComponent,
    UpdateProcessEnginesComponent,
    CardProcessEngineComponent,
  ],
})
export class ProcessEnginesModule { }
