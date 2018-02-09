define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name sampleprojectApp.controller:ContactCtrl
   * @description
   * # ContactCtrl
   * Controller of the sampleprojectApp
   */
  angular.module('sampleprojectApp.controllers.ContactCtrl', [])
    .controller('ContactCtrl', ['$scope', function ($scope) {
      $scope.welcome = "This is Contact us View";
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
    ]);
});
