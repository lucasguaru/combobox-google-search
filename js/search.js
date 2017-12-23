'use strict';

var app = angular.module('demo', ['ngSanitize', 'ui.select']);

/**
 * AngularJS default filter with the following expression:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * performs an AND between 'name: $select.search' and 'age: $select.search'.
 * We want to perform an OR.
 */
app.filter('propsFilter', function () {
  return function (items, props) {
    var out = [];

    if (angular.isArray(items)) {
      var keys = Object.keys(props);

      items.forEach(function (item) {
        var itemMatches = false;

        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          var textSplit = text.split(" ");
          if (textSplit.length > 1) {
            var itemSplitMatchesCount = 0;
            for (var j = 0; j < textSplit.length; j++) {
              if (item[prop].toString().toLowerCase().indexOf(textSplit[j]) !== -1) {
                itemSplitMatchesCount++;
              }
            }
            if (itemSplitMatchesCount == textSplit.length) {
              itemMatches = true;
              break;
            }
          } else {
            if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
              itemMatches = true;
              break;
            }
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
});

app.controller('UrlCtrl', function ($scope, $http, $timeout, $interval) {
  var vm = this;

  vm.setInputFocus = function () {
    $scope.$broadcast('UiSelectDemo1');
  };

  $scope.onSelectCallback = function (item, model) {
    window.open($scope.ctrl.link.selected.url, '_blank').focus();
  };

  vm.links = links;

});
