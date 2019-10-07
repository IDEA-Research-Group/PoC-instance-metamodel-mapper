import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateProcessEngineComponent} from './create-process-engine/create-process-engine.component';
import {ListProcessEngineComponent} from './list-process-engine/list-process-engine.component';
import {UpdateProcessEnginesComponent} from './update-process-engines/update-process-engines.component';
import {NotFoundComponent} from '../../pages/miscellaneous/not-found/not-found.component';
import {ViewProcessEngineComponent} from './view-process-engine/view-process-engine.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateProcessEngineComponent,
  },
  {
    path: 'list',
    component: ListProcessEngineComponent,
  }, {
    path: 'update/:id',
    component: UpdateProcessEnginesComponent,
  }, {
    path: ':id',
    component: ViewProcessEngineComponent,
  }, {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessEnginesRoutingModule { }
