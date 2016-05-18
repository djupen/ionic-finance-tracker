angular.module('myfinance.controllers', [])

  .controller('AppCtrl', function ($scope, entryService) {
    
    ionic.Platform.ready(function () {
      entryService.initialize();
    });

  })

  .controller('AddEntryController', function ($scope) {
  })

  .controller('EntryListController', function ($scope) {
  })

  .controller('StatisticsController', function ($scope) {
  });
