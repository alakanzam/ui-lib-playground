import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParentComponent} from './parent.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
    children: [
      {
        path: '',
        loadChildren: '/child/child.module#ChildModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ParentRoutingModule {

}
