import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChildComponent} from 'ui-lib';

const routes: Routes = [
  {
    path: '',
    component: ChildComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ChildWrapperModule {

}
