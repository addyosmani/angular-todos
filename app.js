function TodoCtrl($scope) {
    $scope.todos = [
        {text:'AngularJS Tutorial', done:false},
        {text:'Read AngularJS Documentation', done:false},
        {text:'Watch example videos', done:false},
    ];

    // Try local storage
    
    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };

    $scope.addTodo = function () {
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = '';
    };
}


