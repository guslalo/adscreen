import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './index/index.component';
import { Slide2Component } from './sliders/slide2/slide2.component';
import { Slide3Component } from './sliders/slide3/slide3.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './../../pipes/safe.pipe';


@NgModule({
  declarations: [
    IndexComponent, 
    Slide2Component, 
    Slide3Component,
    SafePipe
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule,
  ]
})

export class MainModule { }
