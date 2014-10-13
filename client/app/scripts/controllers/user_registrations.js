'use strict';

/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:UserRegistrationsCtrl
 * @description
 * # UserRegistrationsCtrl
 * Controller of the fakeLunchHubApp
 */
angular.module('fakeLunchHubApp')
  .controller('UserRegistrationsCtrl', ['$scope', '$location', '$auth', function ($scope, $location, $auth) {
    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function() { 
          $auth.submitLogin({
            email: $scope.registrationForm.email,
            password: $scope.registrationForm.password
          });
        });
    };
  }]);
