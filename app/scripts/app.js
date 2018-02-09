/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'controllers/contact']
/*deps*/, function (angular, MainCtrl, AboutCtrl, ContactCtrl)
/*invoke*/ {
    'use strict';

    /**
     * @ngdoc overview
     * @name sampleprojectApp
     * @description
     * # sampleprojectApp
     *
     * Main module of the application.
     */
    return angular
      .module('sampleprojectApp', [
        'sampleprojectApp.controllers.MainCtrl',
        'sampleprojectApp.controllers.AboutCtrl',
        'sampleprojectApp.controllers.ContactCtrl',
/*angJSDeps*/'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngAnimate', 'ngTouch'])
      .config(function ($routeProvider,$locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
          .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
          })
          .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
          })
          .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl',
            controllerAs: 'contact'
          })
          .otherwise({
            redirectTo: '/'
          });
      });
  });
