'use strict';

var app = angular.module('demo', ['ngSanitize', 'ui.select']);

/**
 * AngularJS default filter with the following expression:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * performs an AND between 'name: $select.search' and 'age: $select.search'.
 * We want to perform an OR.
 */
app.filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      var keys = Object.keys(props);

      items.forEach(function(item) {
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

  vm.disabled = undefined;
  vm.searchEnabled = undefined;

  vm.setInputFocus = function (){
    $scope.$broadcast('UiSelectDemo1');
  };

  vm.counter = 0;
  vm.onSelectCallback = function (item, model){
    vm.counter++;
    vm.eventResult = {item: item, model: model};
  };


  vm.person = {};

  vm.links = [
    { nome: 'Kibana HK Log Técnico', url: "http://srvbdrivlbr04.santanderbr.pre.corp/app/kibana#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-4h,mode:quick,to:now))&_a=(columns:!(bean.envioModulo,bean.envioStep,bean.sistemaOrigemSigla),filters:!(),index:openbus_search_br,interval:auto,query:(query_string:(analyze_wildcard:!t,query:'tool:MSGLOGSMS')),sort:!(_score,desc))"}
  ];

});
