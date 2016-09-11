import angular from 'angular';
import uiRouter from 'angular-ui-router';
import heroComponent from './hero.component';
import Api from '../api/api';

let heroModule = angular.module('hero', [
  uiRouter,
  Api
])

.component('hero', heroComponent)

.name;

export default heroModule;
