import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MQueryComponent} from './mquery.component';
import {NotFoundComponent} from '../pages/miscellaneous/not-found/not-found.component';
import {ListProcessDefinitionsByEngineComponent} from './process-definition/list-process-definitions-by-engine/list-process-definitions-by-engine.component';
import {ListActivitiesByProcessComponent} from './activities/list-activities-by-process/list-activities-by-process.component';
import {ViewProcessInstanceComponent} from './process-instances/view-process-instance/view-process-instance.component';

const routes: Routes = [{
  path: '',
  component: MQueryComponent,
  children: [
    {
      path: 'process-instance/:process_instance_id',
      component: ViewProcessInstanceComponent,
    }, {
      path: 'activities',
      loadChildren: './activities/activities.module#ActivitiesModule',
    }, {
      path: 'processDefinition/:process_definition_id/activities',
      component: ListActivitiesByProcessComponent,
    }, {
      path: 'processDefinitions',
      loadChildren: './process-definition/process-definition.module#ProcessDefinitionModule',
    }, {
      path: 'engine/:process_engine_id/processDefinitions',
      component: ListProcessDefinitionsByEngineComponent,
    }, {
      path: 'engines',
      loadChildren: './process-engines/process-engines.module#ProcessEnginesModule',
    }, {
      path: '',
      redirectTo: 'engines',
      pathMatch: 'full',
    }, {
      path: '**',
      component: NotFoundComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MqueryRoutingModule {
}
