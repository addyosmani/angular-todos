angular.module('todo', ['ui']);

// Set up defaults and storage for categories

var DEFAULT_CATEGORIES = [
  {category:'Tasks'}
];

var CAT_KEY = 'categories_';

if (!localStorage[CAT_KEY]) {
  localStorage[CAT_KEY] = JSON.stringify(DEFAULT_CATEGORIES);
}

// Set up defaults and storage for Todo items

var DEFAULT_TODOS = [
  {title:'Start organizing your life!', category:'', date:'', note:'', done:false},
];

var TODO_KEY = 'todos_';

if (!localStorage[TODO_KEY]) {
  localStorage[TODO_KEY] = JSON.stringify(DEFAULT_TODOS);
}

// Set up controller

function TodoCtrl($scope) {
  // Prepare data
  var todos = localStorage[TODO_KEY];
  todos = todos ? JSON.parse(todos) : DEFAULT_TODOS;
  $scope.todos = todos;

  var categories = localStorage[CAT_KEY];
  categories = categories ? JSON.parse(categories) : DEFAULT_CATEGORIES;
  $scope.categories = categories;


  // Format date for datepicker
  $scope.formDate = $('#date').datepicker('getDate');

  // Get total of Todos
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };

  $scope.storeTodos = function () {
    // Store updated todo list locally
    localStorage[TODO_KEY] = JSON.stringify($scope.todos);
  };

  $scope.addTodo = function () {
    // Add item to todo list
    $scope.todos.push({title:$scope.formTodoText,category:$scope.selectedCategory,date:$scope.formDate, note:$scope.formNoteText, done:false});
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

  $scope.storeCategories = function () {
    localStorage[CAT_KEY] = JSON.stringify($scope.categories);
  };

  $scope.addCategory = function () {
    // Add Category
    $scope.categories.push({category:$scope.formCategoryText});
    $scope.formCategoryText = '';
    $scope.storeCategories();
  };

  $scope.deleteCategory = function () {
    $scope.categories.pop({category:$scope.removeMe});
    $scope.storeCategories();
  };

};







