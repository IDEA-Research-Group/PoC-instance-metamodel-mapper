import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateProcessDefinitionComponent} from './create-process-definition/create-process-definition.component';
import {ListProcessDefinitionsComponent} from './list-process-definitions/list-process-definitions.component';
import {NotFoundComponent} from '../../pages/miscellaneous/not-found/not-found.component';
import {ViewProcessDefinitionComponent} from './view-process-definition/view-process-definition.component';

const routes: Routes = [
  {
    path: ':process_definition_id/details',
    component: ViewProcessDefinitionComponent,
  }, {
    path: 'create',
    component: CreateProcessDefinitionComponent,
  }, {
    path: 'list',
    component: ListProcessDefinitionsComponent,
  }, {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    }, {
      path: '**',
      component: NotFoundComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessDefinitionRoutingModule { }
