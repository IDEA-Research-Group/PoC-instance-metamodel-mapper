import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateActivityComponent} from './create-activity/create-activity.component';
import {ListActivitiesComponent} from './list-activities/list-activities.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateActivityComponent,
  }, {
    path: 'list',
    component: ListActivitiesComponent,
  }, {
    path: '',
    redirectTo: 'list',
    pathMatch: 'prefix',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
