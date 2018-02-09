define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name sampleprojectApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the sampleprojectApp
   */
  angular.module('sampleprojectApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
