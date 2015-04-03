var userController = angular.module('userController', ['ngRoute','ngTable']);

/**
 * user list controller 
 */
userController.controller('userListController', ['$scope','ngTableParams','$resource','$location','$route',
    function ($scope,ngTableParams,$resource,$location,$state,$route) {
        
    	var Api = $resource('/json/user-list.json');
        $scope.name = "";
        $scope.deleteObj = null;

        $scope.tableParams = new ngTableParams({
            page: 1,            // show first page
            count: 10,          // count per page
            sorting: {}
        }, {
            total: 0,           // length of data
            getData: function($defer, params) {
                // ajax request to api
                Api.get(params.url(), function(data) {
                    params.total(data.total);
                    // set new data
                    $defer.resolve(data.data);
                });
            }
        });

    }]);
