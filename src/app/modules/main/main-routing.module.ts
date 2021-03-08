import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { Slide3Component } from './sliders/slide3/slide3.component'

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'detail-accessory', component: Slide3Component }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }
