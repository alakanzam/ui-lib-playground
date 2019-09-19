import { NgModule } from '@angular/core';
import {ParentComponent} from './parent.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    ParentComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    ParentComponent
  ]
})
export class ParentModule { }
