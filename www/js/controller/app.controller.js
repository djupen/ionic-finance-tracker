angular.module('myfinance.controller.app', ['myfinance.services'])

  .controller('AppCtrl', function ($scope, entryService) {

    $scope.isUndefinedOrNull = function (val) {
      return angular.isUndefined(val) || val === null
    };

  })
