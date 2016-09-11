import angular from 'angular';
import apiService from './api.service';

let apiModule = angular.module('api', [
  ])
  .service('Api', apiService)
  .name;

export default apiModule;

