'use strict';

/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the fakeLunchHubApp
 */
angular.module('fakeLunchHubApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  });
