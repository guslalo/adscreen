import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './index/index.component';
import { Slide2Component } from './sliders/slide2/slide2.component';
import { Slide3Component } from './sliders/slide3/slide3.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './../../pipes/safe.pipe';

import { SpinnerComponent } from './../../shared/spinner/spinner.component';


@NgModule({
  declarations: [
    IndexComponent, 
    Slide2Component, 
    Slide3Component,
    SafePipe,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ]
})

export class MainModule { }
