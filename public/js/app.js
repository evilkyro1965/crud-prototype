/**
 * CRUD App
 */
var crudApp =
    angular.module('crudApp', ['ngRoute','ngResource','userController','ui.date']).
    config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/user', {
                    templateUrl: 'partials/user-list.html',
                    controller: 'userListController'
                }).
                otherwise({
                    redirectTo: '/user'
                });
        }]);

/**
 * Date picker directive,using jquery ui date picker
 */
crudApp.directive('datepicker', function() {
  return {
    require: 'ngModel',
    link: function(scope, el, attr, ngModel) {
      $(el).datepicker({
        onSelect: function(dateText) {
          scope.$apply(function() {
            ngModel.$setViewValue(dateText);
          });
        }
      });
    }
  };
});