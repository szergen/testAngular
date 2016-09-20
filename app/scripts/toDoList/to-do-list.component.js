'use strict';

angular.
    module('toDoList').
        component('toDoList', {
            templateUrl: 'scripts/toDoList/to-do-list.template.html',
            controller: function ToDoListController($scope) {
                
                self = this;
                $scope.currentSelection='';
                $scope.selected = '';
                $scope.var1 = 'my var';
                $scope.myLists = ['Cumparaturi', 'Work', 'Games'];
                $scope.myToDos = [
                    {   nume: 'Paine',
                        Lista: $scope.myLists[0],
                        status: false
                    },
                    {   nume: 'Portocale',
                        Lista: $scope.myLists[0],
                        status: false
                    },
                    {   nume: 'Proiect1',
                        Lista: $scope.myLists[1],
                        status: false
                    },
                    {   nume: 'Proiect2',
                        Lista: $scope.myLists[1],
                        status: false
                    },
                    {   nume: 'Starcraft',
                        Lista: $scope.myLists[2],
                        status: false
                    }
                ];
                $scope.stergeToDo = function(x) {
                    console.log(x);
                    $scope.myToDos.splice(x,1);
                }
                $scope.adaugaToDo = function() {
                    $scope.myToDos.push({nume:$scope.adaugaVal, status:false, Lista:$scope.currentSelection});
                    $scope.todoInput = "";
                }
                
            }
});