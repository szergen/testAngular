'use strict';

/**
 * @ngdoc overview
 * @name testAngularApp
 * @description
 * # testAngularApp
 *
 * Main module of the application.
 */
angular
  .module('testAngularApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'toDoList',
    'newList'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<to-do-list></to-do-list>'
      }).
        when('/newList', {
        template: '<new-list></new-list>'
    })
      .otherwise({
        redirectTo: '/'
      });
  });