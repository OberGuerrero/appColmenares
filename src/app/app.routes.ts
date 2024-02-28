import { Routes } from '@angular/router';
import angular from 'angular';

export const routes: Routes = [];

angular.module('miApp')
    .config(['$routeProvider', function($routeProvider: any) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            })
            .otherwise({ redirectTo: '/' });
    }]);



