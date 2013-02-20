angular.module('todo', ['ui']);

var DEFAULT_TODOS = [
    {category: 'Tasks', title:'Start organizing your life!', date:'', note:'', done:false},
];
var TODO_KEY = 'todos_';

if (!localStorage[TODO_KEY]) {
  localStorage[TODO_KEY] = JSON.stringify(DEFAULT_TODOS);
}

function TodoCtrl($scope) {
    var todos = localStorage[TODO_KEY];
    todos = todos ? JSON.parse(todos) : DEFAULT_TODOS;
    $scope.todos = todos;

    $scope.formDate = $('#date').datepicker('getDate');
 

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.storeTodos = function () {
      // Store updated todo list locally
      localStorage[TODO_KEY] = JSON.stringify($scope.todos);
    };


    $scope.addTodo = function () {
        // Add item to todo list
        $scope.todos.push({category:$scope.formCategoryText,title:$scope.formTodoText,date:$scope.formDate, note:$scope.formNoteText, done:false});
        $scope.formCategoryText = '';
        $scope.formTodoText = '';
        $scope.formNoteText = '';
        $scope.formDate = '';
        $scope.storeTodos();
    };

    $scope.clearCompleted = function () {
      $scope.todos = _.filter($scope.todos, function(todo){
        return !todo.done;
      });
      $scope.storeTodos();
    };

};







