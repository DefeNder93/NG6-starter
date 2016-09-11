import angular from 'angular';
import authService from './auth.service';
import angularLocalStorage from 'angular-local-storage';

let authModule = angular.module('auth', [
    angularLocalStorage
])
  .service('Auth', authService)
  .name;

export default authModule;

