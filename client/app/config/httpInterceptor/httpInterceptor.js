import angular from 'angular';
import httpInterceptor from './httpInterceptor.service';
import angularLocalStorage from 'angular-local-storage';

let httpInterceptorModule = angular.module('HttpInterceptor', [
    angularLocalStorage
])
  .service('HttpInterceptor', httpInterceptor)
  .name;

export default httpInterceptorModule;

