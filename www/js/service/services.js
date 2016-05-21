angular.module('myfinance.services', ['ionic'])

  .factory('categoryService', function () {

    var topLevelCategories = [
      {
        id: "1",
        type: "expense",
        title: "Kategorie 1",
        description: "Kategorie 1 Beschreibung",
        icon: "",
        color: "00ff00"
      },
      {
        id: "2",
        type: "expense",
        title: "Kategorie 2",
        description: "Kategorie 2 Beschreibung",
        icon: "",
        color: "ffee11"
      },
      {
        id: "3",
        type: "expense",
        title: "Kategorie 3",
        description: "Kategorie 3 Beschreibung",
        icon: "",
        color: "11ff44"
      },
      {
        id: "4",
        type: "income",
        title: "Kategorie 4",
        description: "Kategorie 4 Beschreibung",
        icon: "",
        color: "8888ff"
      }
    ];

    var subLevelCategories = [
      {id: "1", topLevelId: "1", title: "Kategorie 1 Subkategorie 1", color: "00ff00"},
      {id: "2", topLevelId: "1", title: "Kategorie 1 Subkategorie 2", color: "00ff00"},
      {id: "3", topLevelId: "2", title: "Kategorie 2 Subkategorie 1", color: "ffee11"},
      {id: "1", topLevelId: "2", title: "Kategorie 2 Subkategorie 2", color: "ffee11"},
      {id: "2", topLevelId: "3", title: "Kategorie 3 Subkategorie 1", color: "11ff44"},
      {id: "3", topLevelId: "3", title: "Kategorie 3 Subkategorie 2", color: "11ff44"},
      {id: "3", topLevelId: "4", title: "Kategorie 4 Subkategorie 1", color: "8888ff"},
      {id: "4", topLevelId: "4", title: "Kategorie 4 Subkategorie 2", color: "8888ff"}
    ];

    // The category picked by the user
    this.selectedAddEntryTopLevelCategory = null;

    // The sub level category picked by the user
    this.selectedAddEntrySubLevelCategory = null;

    return {

      setSelectedAddEntryTopLevelCategory: function (topLevelCategory) {
        this.selectedAddEntryTopLevelCategory = topLevelCategory;
      },

      setSelectedAddEntrySubLevelCategory: function (subLevelCategory) {
        this.selectedAddEntrySubLevelCategory = subLevelCategory;
      },

      getTopLevelCategories: function () {
        return topLevelCategories;
      },

      getSubLevelCategoriesForTopLevelCategory: function (x) {
        var matchingSubLevelCategories = [];
        for (var i = 0; i < subLevelCategories.length; i++) {
          var subLevelCategoryItem = subLevelCategories[i];
          if (subLevelCategoryItem.topLevelId == x.id) {
            matchingSubLevelCategories.push(subLevelCategoryItem);
          }
        }
        return matchingSubLevelCategories;
      }
    }
  })

  /*
   * Entry: {
   *    type: "expense | income",
   *    value: "19.99",
   *    topLevelCategory: "topLevelCategory.id",
   *    subLevelCategory: "subLevelCategory.id | empty"
   *    date: "date"
   *    locationLng: "lng"
   *    locationLat: "lat"
   * }
   */
  .factory('entryService', function () {
    return {

      getAllEntries: function () {
        return JSON.parse(window.localStorage.getItem('entries'));
      },

      getAllEntriesByType: function (x) {
        var entries = JSON.parse(window.localStorage.getItem('entries'));
        var matchingEntries = [];
        for (var entryItem in entries) {
          if (entryItem.type == x) {
            matchingEntries.push(entryItem);
          }
        }
        return matchingEntries;
      },

      saveEntry: function (x) {
        var entries = JSON.parse(window.localStorage.getItem('entries'));
        entries.push(x);
        window.localStorage.setItem('entries', JSON.stringify(entries));
      },

      /*
       * Entry: {
       *    value: "19.99",
       *    topLevelCategory: "topLevelCategory.id",
       *    subLevelCategory: "subLevelCategory.id | empty",
       *    date: "date",
       *    locationLng: "lng",
       *    locationLat: "lat"
       * }
       * */

      initialize: function () {
        var initData = [
          {
            value: "9.99",
            topLevelCategory: "1",
            subLevelCategory: "1",
            date: new Date(2016, 05, 05, 12, 22, 0, 0),
            locationLng: "48.199434",
            locationLat: "16.385948"
          },
          {
            value: "27.62",
            topLevelCategory: "2",
            subLevelCategory: "2",
            date: new Date(2016, 05, 10, 09, 11, 0, 0),
            locationLng: "49.431271",
            locationLat: "10.969916"
          },
          {
            value: "1920.00",
            topLevelCategory: "4",
            subLevelCategory: "",
            date: new Date(2016, 05, 16, 22, 30, 0, 0),
            locationLng: "48.216756",
            locationLat: "16.359927"
          }
        ];
        window.localStorage.setItem('entries', JSON.stringify(initData));
      }

    }
  });
