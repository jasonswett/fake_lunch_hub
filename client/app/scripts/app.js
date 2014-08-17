'use strict';

/**
 * @ngdoc overview
 * @name lunchHubApp
 * @description
 * # lunchHubApp
 *
 * Main module of the application.
 */
var app = angular.module('fakeLunchHubApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'rails'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/groups', {
      templateUrl: 'views/groups.html',
      controller: 'GroupsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.factory('Group', ['railsResourceFactory', function (railsResourceFactory) {
  return railsResourceFactory({ url: '/api/groups', name: 'group' });
}]);

