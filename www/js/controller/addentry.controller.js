angular.module('myfinance.controller.addentry', ['myfinance.services'])

  .controller('AddEntryController', function ($scope, categoryService) {

    $scope.categoryService = categoryService;

    // Called when the user submits the form
    $scope.addEntry = function (form) {
      if (form.$valid) {
        $state.go('app.entryList');
      }
    };

  })
