'use strict';

/**
 * @ngdoc overview
 * @name workspaceApp
 * @description
 * # workspaceApp
 *
 * Main module of the application.
 */
angular
  .module('workspaceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    // Own Modules
    'boxplot'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
