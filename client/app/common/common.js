import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Auth from './auth/auth'
import Api from './api/api'

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  Auth,
  Api
])

.name;

export default commonModule;
