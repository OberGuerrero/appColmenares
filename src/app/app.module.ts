import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as angular from 'angular';
import 'angular-route';

angular.module('miApp', ['ngRoute']);

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
