angular.module('myfinance.controller.app', ['myfinance.services'])

  .controller('AppCtrl', function ($scope, entryService) {

    ionic.Platform.ready(function () {
      entryService.initialize();
    });

  })
