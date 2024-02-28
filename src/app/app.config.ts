import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import * as angular from 'angular';
import { HomeComponent } from './home/home.component';

angular.module('miApp')
    .config(['$routeProvider', function($routeProvider: any) {
        HomeComponent
    }]);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
