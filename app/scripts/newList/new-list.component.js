'use strict';

angular.
    module('newList').
        component('newList', {
            templateUrl:'scripts/newList/new-list.template.html',
            controller: ['$routeParams', function NewListController($scope, $routeParams) {
                
                
                console.log($scope.listId);
                
            }]
    
});