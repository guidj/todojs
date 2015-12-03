'use strict';

angular.module('todoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      {name: 'Item 1', priority: 1},
      {name: 'Item 2', priority: 2},
      {name: 'Item 3', priority: 1}
    ];

    $scope.priorityOptions = ["1", "2", "3"];
    $scope.priority = $scope.priorityOptions[0];

    $scope.addTodo = function () {
      $scope.todos.push({name: $scope.todo, priority: $scope.priority});
      $scope.todo = '';
      $scope.priority = $scope.priorityOptions[0];
    };

    $scope.removeTodo = function(index){
      $scope.todos.splice(index, 1);
    }
  });
