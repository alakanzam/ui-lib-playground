import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParentComponent} from 'ui-lib';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./child-wrapper.module').then(m => m.ChildWrapperModule)
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ParentWrapperModule {

}
