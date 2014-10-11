'use strict';

/**
 * @ngdoc function
 * @name lunchHubApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the lunchHubApp
 */
angular.module('fakeLunchHubApp')
  .controller('GroupsCtrl', ['$scope', function ($scope) {
    $scope.groups = ['Group One', 'Group Two'];
  }]);
