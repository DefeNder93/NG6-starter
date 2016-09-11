import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import HttpInterceptor from './config/httpInterceptor/httpInterceptor';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    HttpInterceptor
  ])
  .config(($locationProvider, $httpProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
    $httpProvider.interceptors.push(HttpInterceptor);
  })

  .component('app', AppComponent);
