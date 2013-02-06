var DEFAULT_TODOS = [
    {text:'Watch example videos', done:false},
    {text:'AngularJS Tutorial', done:false},
    {text:'Read AngularJS Documentation', done:false},
];
var TODO_KEY = 'todos_';

if (!localStorage[TODO_KEY]) {
  localStorage[TODO_KEY] = JSON.stringify(DEFAULT_TODOS);
}

function TodoCtrl($scope) {
    var todos = localStorage[TODO_KEY];
    todos = todos ? JSON.parse(todos) : DEFAULT_TODOS;
    $scope.todos = todos;

    $scope.storeTodos = function () {
        // Store updated todo list locally
        localStorage[TODO_KEY] = JSON.stringify($scope.todos);
    };

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
        $scope.storeTodos();
    };

    $scope.addTodo = function () {
        // Add item to todo list
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = '';
        $scope.storeTodos();
    };



    $scope.sortTodos = function () {
        var sortedtodoList = $scope.todos.sort( function(a, b) {
            return a.text - b.text;
        })
        console.log(sortedtodoList)
    }


}


