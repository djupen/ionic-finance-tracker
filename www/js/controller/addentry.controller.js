angular.module('myfinance.controller.addentry', ['myfinance.services'])

  .controller('AddEntryController', function ($scope, categoryService) {

    $scope.addEntryFormData = {
      amount: '',
      selectedCategory: '',
      selectedSubCategory: ''
    };

    $scope.categories = categoryService.getAllTopLevelCategories();
    //$scope.subLevelCategories = categoryService.getSubLevelCategoriesForTopLevelCategory(addEntryFormData.selectedCategory.id);

    $scope.updateSubCategories = function () {
      $scope.subLevelCategories = categoryService.getSubLevelCategoriesForTopLevelCategory($scope.addEntryFormData.selectedCategory.id);
    };

    $scope.addEntry = function (form) {
      if (form.$valid) {
        $state.go('app.entryList');
      }
    };

  })
