'use strict';

/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fakeLunchHubApp
 */
angular.module('fakeLunchHubApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
