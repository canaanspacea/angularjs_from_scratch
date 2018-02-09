define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name sampleprojectApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the sampleprojectApp
   */
  angular.module('sampleprojectApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', ['$scope', function ($scope) {
      $scope.welcome = "This is About us View";
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }

    ]);

});
