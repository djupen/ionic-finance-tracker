angular.module('myfinance.controller.addentry', ['myfinance.services'])

  .controller('AddEntryController', function ($scope, categoryService) {

    $scope.categoryService = categoryService;

    $scope.selectTopLevelCategory = function (topLevelCategory) {
      categoryService.setSelectedAddEntryTopLevelCategory(topLevelCategory);
      categoryService.setSelectedAddEntrySubLevelCategory(null);
    };

    $scope.selectSubLevelCategory = function (subLevelCategory) {
      categoryService.setSelectedAddEntrySubLevelCategory(subLevelCategory);
    };

    $scope.isSelectedTopLevelCategory = function (topLevelCategory) {
      return topLevelCategory === categoryService.selectedAddEntryTopLevelCategory;
    };

    $scope.isSelectedSubLevelCategory = function (subLevelCategory) {
      return subLevelCategory === categoryService.selectedAddEntrySubLevelCategory;
    };

    // Called when the user submits the form
    $scope.addEntry = function (form) {
    };

  })
